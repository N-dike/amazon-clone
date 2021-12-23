import React, {useEffect} from 'react'
import { toast } from 'react-toastify'
import Header from '../layouts/Header'
import Product from '../Product/Product'
import './Home.css'
const Home = () => {

    useEffect(()=>(
        slider(0)
    ), [])

    return (
        <>
        <Header />
        <div className='home-container'>
            
            <div className='home-sliderContainer'>
                <div className='home-slides'>
                    <img alt='image0' className='home-IMG'src='https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg'/>
                </div>

                <div className='home-slides'>
                    <img alt='image1' className='home-IMG'src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg'/>
                </div>

                <div className='home-slides'>
                    <img alt='image2' className='home-IMG'src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg'/>
                </div>

                <div className='home-slides'>
                    <img alt='image3' className='home-IMG' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg'/>
                </div>

                <div className='home-slides'>
                    <img alt='image4' className='home-IMG' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg'/>
                </div>
            </div>
            <div className='home-products'>
                <Product 
                 id={12326}
                 title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                 price={269.99}
                 rating={3}
                 image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                id={123345}
                title="Fifth Edition, The Ultimate Guide to SAT Grammar"
                price={32.55}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/41V1mbmkfCL._SX384_BO1,204,203,200_.jpg"
                />
                <Product
                id={12334}
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={3.5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>
            <div className='home-products'>
                <Product
                id={12323}
                title = "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6-inch FHD 144Hz IPS Display | 8GB DDR4"
                price={794.95}
                rating={3.5}
                image="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SL1500_.jpg"
                />
                <Product
                id={1639972894}
                title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray"
                price={328}
                rating={4.5} 
                image="https://m.media-amazon.com/images/I/61mXrcMU6LL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/91XfEXGz9UL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                />
            </div>
            <div className='home-products'>
                <Product
                id={12323}
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={1755.99}
                rating={3.5}
                image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
                />
            </div>
            <div className='home-products-4'>
                <Product
                id={1639975638}
                title="Echo Dot (4th Gen) with Clock | Twilight Blue with Sengled Bluetooth Color bulb | Alexa smart home starter kit"
                price={74.98}
                rating={5} 
                image="https://m.media-amazon.com/images/I/81OZ1Mt0xRS._AC_SL1500_.jpg"
                />
                <Product
                id={1639975835}
                title="BlissLights Sky Lite 2.0 - RGB LED Laser Star Projector, Galaxy Lighting, Nebula Lamp (Blue Stars, Smart App)"
                price={69.99}
                rating={4.5} 
                image="https://m.media-amazon.com/images/I/61yCimWkN5L._AC_SL1080_.jpg"
                />
                <Product
                id={12327}
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5} 
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                id={12326}
                title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                price={269.99}
                rating={3}
                image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
            
        </div>
        </>
    )
}
function slider(counter) {
    const slides = document.querySelectorAll(".home-IMG")

    slides.forEach((slide, index) =>{
        if (index !== counter) {
            slide.getElementsByClassName.visibility = `hidden`
            slide.classList.add (`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}

function moveCorousal (counter, slides, len) {
    if (slides) {
        if (counter >= len -1)
        counter = 0
        else
        counter += 1

        slides.forEach((slide, index)=>{
            if (index === counter){
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })
    }
    setTimeout(() => {
        moveCorousal(counter, slides, len);
    }, 5000)

    parseInt(counter) % 5 === 0 ? (
        setTimeout(() => {
            toast.info(`meets added new product to cart`, {
                position: "bottom-left"
            });
        }, 10500)
    ) : (
            setTimeout(() => {
            }, 21000)
        )
}

export default Home
