import React from 'react';
import { animated } from '@react-spring/web';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import useSectionImageAnimation from '../../hooks/useSectionImageAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutUs = () => {
    // declaration of react-spring hooks here
    const firstImageAnim = useSectionImageAnimation({
        top: '50%',
        right: '0%'
    }, {
        top: '40%',
        right: '-15%'
    });

    const secondImageAnim = useSectionImageAnimation({
        top: '50%',
        left: '50%'
    }, {
        top: '65%',
        left: '30%'
    });


    // rendering about use section here
    return (
        <section className='w-[90%] mx-auto py-10'>
            <SectionTitle titleText={'who are we ?'} />
            <div className='flex'>
                <div className='w-1/2 relative flex justify-center'>
                    <animated.img style={firstImageAnim.sectionImageAnimation} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] shadow-snl' src={aboutImage2} alt='our office' />
                    <div className='absolute w-2 h-20 bg-primary left-16 bottom-6'></div>
                    <div className='absolute w-20 h-2 bg-primary left-16 bottom-6'></div>

                    <animated.img style={secondImageAnim.sectionImageAnimation} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] shadow-snl' src={aboutImage1} alt='meeting room' />
                    <div className='absolute w-2 h-20 bg-primary right-16 top-6'></div>
                    <div className='absolute w-20 h-2 bg-primary right-16 top-6'></div>
                </div>
                <div className='w-1/2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iure minus perspiciatis? Excepturi, similique suscipit iste quidem quis commodi repellendus deserunt possimus voluptatibus consequuntur ex non veniam obcaecati id esse.
                        Repudiandae animi officia vero esse doloribus amet, delectus, at fugit illo iusto modi quod nemo enim dolorem, eius blanditiis maxime corporis ad. Mollitia unde iusto natus, corrupti autem totam id.
                        Repudiandae natus officiis accusamus veniam, quis culpa cumque libero distinctio molestiae! Nobis repellat fugit modi minima sunt consequuntur, ullam dolores quod id non dicta aperiam molestiae facere repudiandae deserunt iure!
                        Perspiciatis dignissimos enim assumenda hic, quos ut iure dicta officia magnam fuga impedit repellendus delectus ipsum dolorem inventore porro quae. Nisi facere porro unde aperiam repudiandae ratione nobis fugit ipsam?
                        Temporibus odio pariatur minus nam illo, facere qui aliquid quae voluptates non eum dicta ipsa nihil ex deleniti et officia illum. Omnis libero magni et adipisci ad sapiente iusto similique.
                        Consequuntur suscipit beatae incidunt deleniti fugiat, fuga animi natus optio, vero saepe nihil mollitia, dolorem quidem impedit sit tempore iste facere quae esse at nostrum pariatur corporis repudiandae. Dolorem, minus.
                        Laboriosam neque, corrupti sapiente ipsam hic sit alias, quas, sunt beatae ducimus omnis nisi! Eveniet eum explicabo officia repellat commodi, nulla perspiciatis odio. Nobis harum, placeat qui dolore quidem earum.
                        Repellat similique labore eos unde doloremque eius odio cum natus autem. Vero rem quos veniam repudiandae, error magnam quod nihil, necessitatibus quis nulla quo soluta, voluptatem ut eos ratione. Architecto.
                        Iure reiciendis voluptate sint a voluptatem soluta fugit minima doloribus. Pariatur beatae quasi cupiditate necessitatibus odio aut mollitia eius quia reiciendis. Obcaecati nemo ad ex ratione unde earum quos sapiente!
                        Nihil necessitatibus sint laboriosam praesentium nesciunt beatae tenetur velit, vero ducimus labore eveniet nobis, perferendis ab enim blanditiis! Illum sunt natus voluptas veritatis error fugit sapiente eaque quae. Fugit, atque?
                        Iure reiciendis voluptate sint a voluptatem soluta fugit minima doloribus. Pariatur beatae quasi cupiditate necessitatibus odio aut mollitia eius quia reiciendis. Obcaecati nemo ad ex ratione unde earum quos sapiente!
                        Nihil necessitatibus sint laboriosam praesentium nesciunt beatae tenetur velit, vero ducimus labore eveniet nobis, perferendis ab enim blanditiis! Illum sunt natus voluptas veritatis error fugit sapiente eaque quae. Fugit, atque?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;