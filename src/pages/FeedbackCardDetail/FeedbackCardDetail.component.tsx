import React, {
	useState,
	useEffect,
	DetailedHTMLProps,
	HTMLAttributes,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../../components/Comments/Comments.component';
import axios, { AxiosResponse } from 'axios';
import './FeedbackCardDetail.styles.scss';
import { fetchSingleFeedback } from '../../utils/api/fetchSingleFeedback';
import { useQuery } from '@tanstack/react-query';

interface MatchParams {
	params: {
		id: string;
	};
}

function FeedbackCardDetail() {
	const params = useParams<{ id: string }>();
	const [singleFeedback, setSingleFeedback] = useState<{
		upvotes: number;
		title: string;
		description: string;
		category: string;
	} | null>(null);
	const [comments, setComments] = useState<AxiosResponse<unknown, any>[]>([]);
	useQuery(['singleFeedback', { id: params.id }], fetchSingleFeedback, {
		onSuccess: (
			response: AxiosResponse<{
				upvotes: number;
				title: string;
				description: string;
				category: string;
			}>
		) => {
			setSingleFeedback(response[0]);
		},
		onError: (error) => {
			console.log('Error: ', error);
		},
	});
	const getComments = async () => {
		const response = await axios
			.get(`http://localhost:8000/${params.id}/comments`)
			// .get(
			// 	`https://product-feedback-api-t6wx.onrender.com/${match.params.id}/comments`
			// )
			.catch((err) => {
				console.log('Err: ', err);
			});
		if (response && response.data) {
			setComments(response.data as AxiosResponse<unknown, any>[]);
		}
	};

	useEffect(() => {
		getComments();
	}, []);

	if (singleFeedback === null) {
		return <div></div>;
	}
	const commentNumber = Number(typeof comments !== 'string' && comments.length);
	return (
		<div className='feedback-card-detail'>
			<div className='feedback-detail'>
				<div className='feedback-control'>
					<div className='link-wrapper'>
						<Link to='/' className='go-back-link'>
							<span>
								<i className='fas fa-angle-left'></i>
							</span>
							Go Back
						</Link>
					</div>
					<Link
						to={`/edit-feedback/${params.id}`}
						className='edit-feedback-link'
					>
						<button type='button' className='btn btn-edit'>
							Edit Feedback
						</button>
					</Link>
				</div>
				<div className='feedback-card' style={{ marginTop: '25px' }}>
					<span className='badge upvote-btn'>
						<span>
							<i className='fas fa-angle-up'></i>
						</span>
						{singleFeedback.upvotes}
					</span>
					<div className='card-overview'>
						<h4>{singleFeedback.title}</h4>
						<p>{singleFeedback.description}</p>
						<span>{singleFeedback.category}</span>
					</div>
					<div className='comment'>
						<span>
							<i className='fas fa-comment'></i>
						</span>
						<span>{commentNumber}</span>
					</div>
				</div>
			</div>
			{commentNumber ? (
				<div className='comment-box'>
					<h5 className='comment-number'>{commentNumber} Comments</h5>
					{<Comments details={comments} />}
				</div>
			) : (
				<div className='comment-box'>
					{comments.map((comment, index) => (
						<div key={index}>
							<div
								{...(comment.data as DetailedHTMLProps<
									HTMLAttributes<HTMLDivElement>,
									HTMLDivElement
								>)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default FeedbackCardDetail;
