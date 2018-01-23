import React from 'react';
import styles from './styles.css';


function Link({to, children}) {
	return <a href={to}>{children}</a>
}

export default function Article({article}) {
	return (
		<div className={styles.pos}>
			<div className={styles.title}>{article.title}</div>
			<div>{article.description} <Link to={article.url}>{article.url}</Link></div> 
		</div>
	)
}
