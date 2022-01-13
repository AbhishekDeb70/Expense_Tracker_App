import React from 'react'

export const Header = () => {
    return (
        <div><nav class="navbar">
            <div class="container-fluid">
            <a class="nav-link active"  aria-current="page" href="/"><b>Home</b></a>
            </div>
        </nav>
        <h2> 
               <b> Expense Tracker </b>
            </h2>
            <div class="text-center">
             <img src="https://media.istockphoto.com/vectors/money-bag-icon-on-white-background-vector-vector-id522097277?k=20&m=522097277&s=612x612&w=0&h=QU-z5b5sgM9t8M80-zUyhG2IA7Pl0LqOPAcO-IOLNxQ="
              class="rounded" alt="img"/>
             </div>
            </div>
    )
}
