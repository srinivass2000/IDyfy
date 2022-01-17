import React from "react";
import "../comment/comment.css";

const Comment = ()=>{
    return(
            <div class="comment-thread" style={{borderRadius:"20px"}}>
            <button className="btn-sm pl-3 pr-3 mt-3" style={{ "background-color": "#840FCC", color: "white" }}>
                Comments 
            </button>
            {/* <!-- Comment 1 start --> */}
            <details open class="comment" id="comment-1">
                <a href="#comment-1" class="comment-border-link">
                    <span class="sr-only">Jump to comment-1</span>
                </a>
                <summary>
                    <div class="comment-heading">
                        <div class="comment-voting">
                            <button type="button">
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Vote up</span>
                            </button>
                            <button type="button">
                                <span aria-hidden="true">&#9660;</span>
                                <span class="sr-only">Vote down</span>
                            </button>
                        </div>
                        <div class="comment-info">
                            <a href="#" class="comment-author">someguy14</a>
                            <p class="m-0">
                                22 points &bull; 4 days ago
                            </p>
                        </div>
                    </div>
                </summary>

                <div class="comment-body">
                    <p>
                        This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.
                    </p>
                    <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Reply</button>
                    <button type="button">Flag</button>

                    {/* <!-- Reply form start --> */}
                    <form method="POST" class="reply-form d-none" id="comment-1-reply-form">
                        <textarea placeholder="Reply to comment" rows="4"></textarea>
                        <button type="submit">Submit</button>
                        <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Cancel</button>
                    </form>
                    {/* <!-- Reply form end --> */}
                </div>

                <div class="replies">
                    {/* <!-- Comment 2 start --> */}
                    <details open class="comment" id="comment-2">
                        <a href="#comment-2" class="comment-border-link">
                            <span class="sr-only">Jump to comment-2</span>
                        </a>
                        <summary>
                            <div class="comment-heading">
                                <div class="comment-voting">
                                    <button type="button">
                                        <span aria-hidden="true">&#9650;</span>
                                        <span class="sr-only">Vote up</span>
                                    </button>
                                    <button type="button">
                                        <span aria-hidden="true">&#9660;</span>
                                        <span class="sr-only">Vote down</span>
                                    </button>
                                </div>
                                <div class="comment-info">
                                    <a href="#" class="comment-author">randomperson81</a>
                                    <p class="m-0">
                                        4 points &bull; 3 days ago
                                    </p>
                                </div>
                            </div>
                        </summary>

                        <div class="comment-body">
                            <p>
                                Took the words right out of my mouth!
                            </p>
                            <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
                            <button type="button">Flag</button>

                            {/* <!-- Reply form start --> */}
                            <form method="POST" class="reply-form d-none" id="comment-2-reply-form">
                                <textarea placeholder="Reply to comment" rows="4"></textarea>
                                <button type="submit">Submit</button>
                                <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
                            </form>
                            {/* <!-- Reply form end --> */}
                        </div>
                    </details>
                    {/* Comment 2 end */}

                    <a href="#load-more">Load more replies</a>
                </div>
            </details>
            {/* <!-- Comment 1 end --> */}
        </div>
        
    );
}

export default Comment;

document.addEventListener(
    "click",
    function(event) {
        var target = event.target;
        var replyForm;
        if (target.matches("[data-toggle='reply-form']")) {
            replyForm = document.getElementById(target.getAttribute("data-target"));
            replyForm.classList.toggle("d-none");
        }
    },
    false
);