import "../styles/User.css"
function User() {
    return (
        <div className="user" >

            <div className="description">
<h2>Providing The World's BestUser Experiences</h2>
<span>Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas. </span>
         <div className="part1">
            <div className="circle"><img src="./images/click.svg" alt="" /></div>
            <span>Blandit ut nunc vel bibendum semper elit</span>
            </div>  

         <div className="part1">
         <div className="circle"><img src="./images/click.svg" alt="" /></div>
            <span>Blandit ut nunc vel bibendum semper elit</span>

         </div>
            </div>


            <div className="view">
                <div className="image1"></div>
                <div className="image2"></div>
                <div className="person"></div>
            </div>

        </div>
    )
}
export default User