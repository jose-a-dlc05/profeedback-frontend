import React, { useState } from 'react';
import Tile from '../../components/Tile/Tile.component';
import Banner from '../../components/Banner/Banner.component';
import FeedbackCards from '../../components/FeedbackCards/FeedbackCards.component';
import './Home.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../utils/stringManipulation';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchFeedback } from '../../utils/api/fetchFeedback';
import { setFeedback } from '../../redux/actions/feedbackActions';

function Home() {
	const dispatch = useDispatch();
	const { feedback, amount } = useSelector(
		(state: { allFeedback: { feedback: any[]; amount: number } }) =>
			state.allFeedback
	);
	const [filter, setFilter] = useState<string>('');
	const feedbackCategories = Array.from(
		new Set(feedback.map((data) => data.category))
	);

	const { data: feedbackData, isLoading } = useQuery(
		['feedback'],
		fetchFeedback,
		{
			onSuccess: (response) => {
				dispatch(setFeedback(response.data));
			},
			onError: (error) => {
				console.log('Error: ', error);
			},
		}
	);

	const filteredFeedback = filter
		? feedbackData?.data?.filter((item: any) => item.category === filter)
		: feedbackData?.data || [];
	return (
		<div className='row g-5'>
			<div className='col-3 offset-1 control-tiles'>
				<Tile className='main-tile'>
					<span>
						<h3>ProFeedback</h3>
						<p>Feedback Board</p>
					</span>
				</Tile>
				<br />
				<Tile className='category-tile'>
					{feedback.length > 0 && (
						<h4>
							<span
								onClick={() => setFilter('')}
								className={`badge badge-custom-category ${
									filter === '' ? 'active' : ''
								}`}
							>
								All
							</span>
							{feedbackCategories.map((category: string) => (
								<span
									key={category}
									onClick={() => setFilter(category)}
									className={`badge badge-custom-category ${
										filter === category ? 'active' : ''
									}`}
								>
									{category}
								</span>
							))}
						</h4>
					)}
				</Tile>
			</div>
			<div className='col-8 feedback-area'>
				<Banner />
				<FeedbackCards feedback={filteredFeedback} amount={amount} />
			</div>
		</div>
	);
}

export default Home;
