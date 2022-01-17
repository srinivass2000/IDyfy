import React from "react";
import Like from "../../assets/icon/heart.svg";
import Chat from "../../assets/icon/chat.svg";
import Footer from "../../components/Footer/footer";
import Comment from "../../components/comment/comment";

const Feature=() => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <button className="btn pl-3 pr-3 mb-3 mt-3" style={{ backgroundColor: "#840FCC", color: "white" }}>
                            Lorem Lipsum
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-4 col-md-4 flex justify-center">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item " style={{color:"white"}}><a href="#">feature-1</a></li>
                                <li class="breadcrumb-item" style={{color:"white"}}><a href="#">feature-12</a></li>
                                <li class="breadcrumb-item active "style={{color:"white"}} aria-current="page">feature-123</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"> 
                        <button className="btn-sm pl-3 pr-3 mb-3 mt-3" style={{ "background-color": "#840FCC", color: "white" }}>
                            Description : 
                        </button>
                    </div>
                    <div className="col-md-8 pr-3 pl-3" >
                        <p className="p-4" style={{backgroundColor:"#F2F4F7", borderRadius:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis vitae purus laoreet lacinia. Vestibulum fermentum risus at dolor sodales bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rhoncus pharetra tempus. Morbi gravida efficitur justo, id vestibulum magna iaculis et. Suspendisse feugiat magna vel condimentum rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec rhoncus quis magna id sollicitudin. Proin bibendum turpis diam, nec hendrerit nisl sagittis ac. Ut ac sapien luctus lorem bibendum euismod. Donec et lectus tortor. Quisque rutrum scelerisque tempus. Donec ornare euismod tortor et rhoncus. Suspendisse imperdiet ex a dapibus condimentum.Vestibulum ut purus vel massa semper venenatis cursus sed sapien. Vivamus ipsum tellus, tempus vitae venenatis eget, convallis non nisi. Quisque in sem non ipsum faucibus aliquet. Praesent sit amet viverra libero. Praesent vel neque sit amet mauris elementum condimentum eu sit amet quam. Aliquam in fermentum velit. Aliquam vel faucibus ipsum, at dictum sem. Integer vestibulum, nunc scelerisque ullamcorper congue, felis tellus eleifend neque, nec consequat lorem urna vitae lacus.Praesent et imperdiet augue. Donec tempor, augue ut aliquam tincidunt, ipsum magna tempor felis, quis cursus ante tellus bibendum mi. Sed sit amet ligula nec odio aliquam mattis volutpat a odio. Aenean augue lorem, consectetur id tincidunt laoreet, aliquet volutpat leo. Proin vitae hendrerit ligula, eu maximus ex. Nullam efficitur nec nunc sed maximus. Quisque finibus massa nibh, non venenatis metus pulvin</p>
                    </div>
                    <div className="mt-3 offset-md-6 offset-7 col-md-1 col-1 flex justify-end">
                        <img src={Like} alt="like" className="absolute mt-1" />
                    </div>
                    <div className="mt-3 text-start col-md-1 col-1 " style={{color:"white"}}>3</div>

                    <div className="ml-6 mt-3 col-md-1 col-1 flex justify-end">
                        <img
                            src={Chat}
                            alt="chat"
                            className="absolute  mt-1"
                            width="22px"
                        />
                    </div>
                    <div className="mt-3 text-start col-md-1 col-1" style={{color:"white"}}>3</div>
                </div>
                <div className="row">
                    <div className="mt-3 col-md-6" >
                        <Comment/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  );
};

export default Feature;
