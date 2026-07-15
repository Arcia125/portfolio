import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import * as styles from './recent-posts.module.css';
import LayoutContainer from './layout-container';

const RECENT_POSTS = graphql`
  query RecentPosts {
    allBlogPost(sort: { date: DESC }, limit: 4) {
      nodes {
        id
        title
        slug
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;

const RecentPosts = () => (
  <StaticQuery
    query={RECENT_POSTS}
    render={data => (
      <LayoutContainer>
        <section className={styles.recentPosts} id="writing">
          <p className="eyebrow">Writing</p>
          <div className={styles.headingRow}>
            <h2 className="section-heading">From the blog</h2>
            <Link className={styles.allPostsLink} to="/blog">
              All posts
            </Link>
          </div>
          <ul className={styles.postList}>
            {data.allBlogPost.nodes.map(post => (
              <li key={post.id} className={styles.postItem}>
                <Link to={post.slug} className={styles.postLink}>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postTitle}>{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </LayoutContainer>
    )}
  />
);

export { RecentPosts };
