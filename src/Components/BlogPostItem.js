import React from 'react'

export default function BlogPostItem({image, publishedAt,url, author, title, description}) {
  const notFoundImage = 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=';

  
  let givenTime = publishedAt;
  let convertGivenTime = new Date(givenTime);
  let currentTime = new Date()
  let getDifferenceMS = currentTime - convertGivenTime;
  let getDifferenceSec = getDifferenceMS/1000;
  let hoursDifference = Math.floor(getDifferenceSec/3600);
  getDifferenceSec%=3600;
  let minutesDifference = Math.floor(getDifferenceSec/60);
  return (
    <>
    
    <div className='box-item'>
        <img src={image?image:notFoundImage} alt="" />
        <h3>{title?title.slice(0,60):""}</h3>
        <ul>
        <li>By { author}- {hoursDifference}h & {minutesDifference}m Ago</li>
        </ul>
        <a href={url}>
          <p>{description?description.slice(0,100):"Click here to read News.."}</p>
        </a>
    </div>
    
    
    </>
  )
}
