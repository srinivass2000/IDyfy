import React from 'react'
import { useState, useEffect } from "react";

const Tables = () => {
    const [ideas, setIdeas] = useState([]);
    const [user, setUser] = useState({});
  return (
    <div>
        <div class='my-5' style={{background:"white"}}><h1>Project Table</h1></div>
        <div class="mx-5">
            <table class="table  " style={{background:"white"}}>
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Idea Name</th>
                        <th scope="col">No. of Contributors</th>
                        <th scope="col">No. of Likes</th>
                        <th scope="col">No. of Comments</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {ideas ? (
                        ideas.map((idea, index) => (
                            <tr>
                                <th key={index} scope="row">1</th>
                                <td>{idea.title}</td>
                                <td>{(idea.contributors)}</td>
                                <td>{(idea.liked_users)}</td>
                                <td>{(idea.shares)}</td>
                            </tr> 
                        ))
                    ) : (
                        <>
                        <div>
                        </div>
                        </>
                    )}                   
                </tbody>
            </table>
        </div>

        <div class='my-5 ' style={{background:"white"}}><h1>User Table</h1> </div>
        <div class='mx-5'>
            <table class="table my-5 " style={{background:"white"}}>
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ideas Contributed</th>
                        <th scope="col">Engage Score</th>
                    </tr>
                </thead>
                <tbody>
                    {user ? (
                            ideas.map((us, index) => (
                                <tr>
                                    <th key={index} scope="row">1</th>
                                    <td>{us.name}</td>
                                    <td>{(us.email)}</td>
                                    <td>{(us.ideas_contributed)}</td>
                                    <td>{(us.engagement_score)}</td>
                                </tr> 
                            ))
                        ) : (
                            <>
                            <div>
                            </div>
                            </>
                        )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tables