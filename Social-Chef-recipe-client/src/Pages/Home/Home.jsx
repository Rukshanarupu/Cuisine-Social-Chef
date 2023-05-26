import React from 'react';
import { FaAngleRight, FaSearch, FaNewspaper, FaRegComments, FaPhotoVideo, FaPen, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Chefs from './Chefs';


const Home = () => {
    return (
        <div className='container mx-auto font-poppins'>
            {/* Banner start here */}
            <div className="mb-5 hero min-h-screen" style={{ backgroundImage: `url("https://mytheme.io/recipes/wp-content/uploads/2014/04/1011-1-1140x500.jpg")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content">
                    <div className="grid md:grid-cols-2">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold font-forum text-secondary">Welcome to <span className='font-vibes'>SocialChef!</span></h1>
                            <p className="mb-5">SocialChef is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.</p>
                            <p className='py-3'>You will also get a chance to win awesome prizes, make new friends and share delicious recipes</p>
                            <Link to='./login' className="btn text-black my-btn mb-3">Explore our community <FaAngleRight className='ml-2'></FaAngleRight></Link>
                        </div>
                        <div>
                            <div className="carousel w-full">
                                <div id="item1" className="carousel-item w-full">
                                <img src="https://www.themeenergy.com/themes/wordpress/social-chef/wp-content/uploads/2014/11/pasta-329521_1280.jpg" className="w-full rounded-lg shadow-2xl" />
                                </div> 
                                <div id="item2" className="carousel-item w-full">
                                <img src="https://www.themeenergy.com/themes/wordpress/social-chef/wp-content/uploads/2014/11/breakfast-21874_1280.jpg" className="w-full rounded-lg shadow-2xl" />
                                </div> 
                                <div id="item3" className="carousel-item w-full">
                                    <img src="https://www.themeenergy.com/themes/wordpress/social-chef/wp-content/uploads/2014/11/celery-seeds-328919_1280.jpg" className="w-full rounded-lg shadow-2xl" />
                                </div> 
                                <div id="item4" className="carousel-item w-full">
                                    <img src="https://www.themeenergy.com/themes/wordpress/social-chef/wp-content/uploads/2014/12/cheese-164872_1280.jpg" className="w-full rounded-lg shadow-2xl" />
                                </div>
                            </div> 
                            <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#item1" className="btn btn-xs">1</a> 
                                <a href="#item2" className="btn btn-xs">2</a> 
                                <a href="#item3" className="btn btn-xs">3</a> 
                                <a href="#item4" className="btn btn-xs">4</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* feature start here */}
            <div className='my-10'>
                <div class="title-design ">
                    <div className='my-title-border'></div>
                    <h2 className=''><span className='my-title'>SocialChef in numbers</span></h2>
                    <div className='my-title-border'></div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-between gap-5 my-5'>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center font-bold'>
                            <img className='w-12 ' src="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/2f135afc2147724d94a4ac9668b38760a9fddf55/Assignment-10-img/images/kitchen.svg" alt="" />
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-4'>26</h3>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center text-5xl'>
                        <FaSearch></FaSearch>
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-4'>116</h3>
                            <p>Recipes</p>
                        </div>
                    </div>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center text-5xl'>
                        <FaPhotoVideo></FaPhotoVideo>
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-4'>127</h3>
                            <p>photos</p>
                        </div>
                    </div>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center text-5xl'>
                            <FaPen></FaPen>
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-4'>13</h3>
                            <p>forum posts</p>
                        </div>
                    </div>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center text-5xl'>
                            <FaRegComments></FaRegComments>
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-4'>56</h3>
                            <p>comments</p>
                        </div>
                    </div>
                    <div className='p-5 bg-green-100 rounded-lg text-center w-36'>
                        <div className='flex justify-center text-5xl'>
                            <FaNewspaper></FaNewspaper>
                        </div>
                        <div className='font-bold'>
                            <h3 className='text-3xl mt-3'>10</h3>
                            <p>Articles</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* about us section here */}
            <div className='my-5 grid md:grid-cols-2 bg-red-100'>
                <div>
                    <img src="https://media.istockphoto.com/id/1148042601/photo/delighted-guests-lauding-female-chef.jpg?s=1024x1024&w=is&k=20&c=bq2m3D96R6GfQS4kOEu-btBGTUj2QLCOHF0Nm1X5vLM=" alt="" />
                </div>
                <div className="section-title flex flex-col justify-center px-8 py-12">
                        <div className='title-design'>
                            <div className='my-title-border'></div>
                            <h2 className='my-title'>About Us </h2>
                            <div className='my-title-border'></div>
                        </div>
                        <p className='my-5 font-poppins text-slate-800'>We are a family-owned and operated restaurant that has been serving delicious food to our community for over 20 years. Our passion for food and dedication to quality is reflected in every dish we serve.... <Link to="./about"><button className='bg-red-300 border-0 px-2 py-1 rounded-lg hover:bg-red-400'>Read More</button></Link> </p>
                    </div>
            </div>


            {/* Chefs info start here */}
            <section className='my-5'>
                <div class="title-design ">
                    <div className='my-title-border'></div>
                    <h2 className=''><span className='my-title'>All Chef Directory</span></h2>
                    <div className='my-title-border'></div>
                    
                </div>
                <p className='text-center my-3'>we strive to provide our guests with a unique speakeasy cocktail bar experience with the best craft cocktails & late night food</p>
                <div>
                    <Chefs></Chefs>
                </div>
            </section>


            {/* food reviewer section */}
            {/* <div class="mb-5 mt-5 pt-5 container">
                <div class="text-center">
                    <h4 class="">FOODS REVIEWS</h4>
                    <h2 class="">Global Customer Feedback</h2>
                </div>
                <div class="g-4 grid md:grid-cols-3">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14876457/pexels-photo-14876457.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/1937791/pexels-photo-1937791.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -70px; margin-left: 38%;"/>
                                <div class="card-title h5">Douglas Keane</div>
                                <p class="card-text">I have to say that i love dominos handmasde pan pizza it is so so good, All product good, and service good, Items with poor reliability were</p>
                            </div>
                        </div>
                    <div class="col">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14863907/pexels-photo-14863907.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -75px; margin-left: 38%;"/>
                                <div class="card-title h5">Rick Shohel</div>
                                <p class="card-text">They have always given me sound advice on purchases. Recommended items are were always reliable. Items with poor reliability were duds.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14866628/pexels-photo-14866628.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -70px; margin-left: 38%;"/>
                                <div class="card-title h5">Jamil Dev</div>
                                <p class="card-text">I had a great time eating delicous food at your restaurant, the wailters and waitrsses were committed to great service and were and vary friendly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* Contact start here */}
            <section className='my-10 mx-10'>
                <div class="title-design ">
                    <div className='my-title-border'></div>
                    <h1 className='mt-10 mb-4'><span className='my-title'>Address</span></h1>
                    <div className='my-title-border'></div>
                </div>
                    <p className='text-center'>you can contact with us by following way.</p>
                <div className='flex justify-around my-4'>
                    <div className='border rounded-xl shadow-xl p-5'>
                        <h2 className='text-xl'>Restaurant</h2>
                        <p>If food is an experience for you, then you will find it at the Food Recipe</p><br />                        
                        <div>
                            <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                            <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                            <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-5'>
                        <h2 className='text-xl'>Head Office</h2>
                        <p>If food is an experience for you, then you will find it at the Food Recipe</p><br /> 
                        <div>
                            <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                            <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                            <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;