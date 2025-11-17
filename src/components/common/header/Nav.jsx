import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {


    const header=[

        {
            slug:"/",
            page:"Accueil"
        },
        {
            slug:"/apropos",
            page:"A propos"
        },
         {
            categories:[
                {
                    slug:"/categorie/film",
                    page:"Film"
                },
                {
                    slug:"/categorie/documentaire",
                    page:"Documentaire"
                },
            ]
        },
    ]


    return (
        <nav>


{header.map((item,index)=>{
    return(

        <>
        <Link to={item.slug} key={index}>{item.page}</Link>
        {item.categories ? 

          <details>

            <summary>Categories</summary>


            {item.categories.map((category,index)=>{
                return(
                    <div>
                    <Link to={category.slug} key={index}>
                        
                       {category.page}
                        
                        
                   </Link>
                   </div>
                        )
            })}

          </details>

         : null}
   
        </>
    )
})}




        </nav>
    )
}
