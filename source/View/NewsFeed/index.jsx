import React from 'react';
import Article from '../../Component/Article'

export default function NewsFeed ({articles}) {
	return (
			articles.map(art => {
				return <Article
					key={art.id}
					article={art}
				/>
			})
		)
}
