// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props

  return (
    <li className="blog-item-container">
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{blogItem.title}</h1>
        <p className="blog-item-details-published-date">
          {blogItem.publishedDate}
        </p>
      </div>
      <p className="blog-item-description">{blogItem.description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
