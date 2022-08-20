import React from 'react'
import "./coursedetailcards.scss"
import imgg from "../../assets/courseex.png"

const CourseDetailCards = () => {
    return (
        <div>
            <div className="recipe-card">

                <aside className='aside-cd'>

                    <img className='img-course-d' src={imgg} alt="Chai Oatmeal" />

                    {/* <a href="#" class="button-cd"><span class="icon-cd icon-play"></span></a> */}

                </aside>

                <article className='article-cd'>

                    <h2>Chai Oatmeal</h2>
                    <h3>Breakfast</h3>

                    <ul className='ul-cd'>
                        <li className='li-cd'><span class="icon-cd icon-users"></span><span>1</span></li>
                        <li className='li-cd'><span class="icon-cd icon-clock"></span><span>15 min</span></li>
                        <li className='li-cd'><span class="icon-cd icon-level"></span><span>Beginner level</span></li>
                        <li className='li-cd'><span class="icon-cd icon-calories"></span><span>248</span></li>
                    </ul>

                    <p>For an extra thick and creamy bowl, add oat bran.  It'll make for a hearty helping and also add more fiber to your meal.  If you love the taste of chai, you'll enjoy this spiced version with coriander, cinnamon, and turmeric.</p>

                    <p class="ingredients"><span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.</p>

                </article>

            </div>
        </div>
    )
}

export default CourseDetailCards