import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../../components/Comments/Comments.component';
import './FeedbackCardDetail.styles.scss';
import { fetchSingleFeedback } from '../../utils/api/fetchSingleFeedback';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchCommentsByFeedback } from '../../utils/api';
import updateComment from '../../utils/api/updateComment';

function FeedbackCardDetail() {
	const params = useParams<{ id: string }>();
	const { data: singleFeedbackData, isLoading: feedbackLoading } = useQuery(
		['singleFeedback', { id: params.id }],
		fetchSingleFeedback,
		{
			onError: (error) => {
				console.error('Error: ', error);
			},
		}
	);
	const { data: commentsByFeedbackData } = useQuery(
		['comments', { id: params.id }],
		fetchCommentsByFeedback,
		{
			onError: (error) => {
				console.error('Error: ', error);
			},
		}
	);
	const upvoteFeedback = useMutation(updateComment, {
		onError: (error) => {
			console.error('Error: ', error);
		},
	});

	if (feedbackLoading) {
		return <div></div>;
	}
	if (!feedbackLoading) {
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
						<span
							className='badge upvote-btn'
							onClick={() => {
								upvoteFeedback.mutate({
									id: singleFeedbackData[0].id,
									upvotes: ++singleFeedbackData[0].upvotes,
								});
							}}
						>
							<span>
								<i className='fas fa-angle-up'></i>
							</span>
							{singleFeedbackData[0].upvotes}
						</span>
						<div className='card-overview'>
							<h4>{singleFeedbackData[0].title}</h4>
							<p>{singleFeedbackData[0].description}</p>
							<span>{singleFeedbackData[0].category}</span>
						</div>
						<div className='comment'>
							<span>
								<i className='fas fa-comment'></i>
							</span>
							<span>{commentsByFeedbackData.length}</span>
						</div>
					</div>
				</div>
				{commentsByFeedbackData ? (
					<div className='comment-box'>
						<h5 className='comment-number'>
							{commentsByFeedbackData.length} Comments
						</h5>
						{<Comments details={commentsByFeedbackData} />}
					</div>
				) : (
					<div className='comment-box'>
						{commentsByFeedbackData.map((comment, index) => (
							<div key={index}>
								<div
									{...(comment as DetailedHTMLProps<
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
}

export default FeedbackCardDetail;
