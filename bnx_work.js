
function log(log){
    console.log(log);
    document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.title.Alegreya-Bold").innerText = log;
}

function doclick(){
    //检测 是否执行完成 ：

    try {

        if(document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div > div > input")){
            var holoder = document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div > div > input").getAttribute('placeholder')
            if(holoder == '選擇工作角色' || holoder == 'Choose a hero'){
                
                log("开始执行自动工作脚本：")

                //打开list
                document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div").click()
                //等待0.5秒
                setTimeout("twiceStep()", 200);
                
                
            }else{
                //
            log('继续检测是否执行完成。');
            }
        }else{

            var button = document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > button");
            var loadingname = button.childNodes[0].className;
            if(loadingname == 'el-icon-loading'){
                log('正在加载工作，，，继续检测是否执行完成。');
            }else{
                log('异常情况...');
                //点击工作
            if(button.innerText=='開始工作' || button.innerText=='Start working'|| button.innerText=='Enable'|| button.innerText=='授權'){
                button.click();
                //Enable' || enbalebutton.innerText == '授權')
            }


            }


            



            
        }
        

        
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
        }
        setTimeout("doclick()", 10*1000);
}


function twiceStep(){
    //
    //获取el ID ， 例如：'el-popper-2177'
    if(document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div")){
        var elpopper = document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div").getAttribute("aria-describedby")

        
        if(document.querySelector("#"+elpopper+" > div.el-select-dropdown.workpop-select > div > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul").childNodes.length > 2){
            //
                log('检测加载数据是否完成,然后点击第一个');
            //选择第一个：
            if(document.querySelector("#"+elpopper+" > div.el-select-dropdown.workpop-select > div > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(1)")){
                document.querySelector("#"+elpopper+" > div.el-select-dropdown.workpop-select > div > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(1)").click()

                console.log("选择："+document.querySelector("#"+elpopper+" > div.el-select-dropdown.workpop-select > div > div.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > ul > li:nth-child(1)").innerText);
                //等待0.5秒
                setTimeout("thirdStep()", 200);
            }
        }else{
            //点击重新加载
            log('关闭list');
            document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > div > div.el-select.Num-font.worklist-select > div").click()
        }
    }
    
   
    
}

//点击开始工作
function thirdStep() {
    //检测是否需要启用：
    var enbalebutton = document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > button");
    if(enbalebutton){
        if(enbalebutton.innerText == 'Enable' || enbalebutton.innerText == '授權'){
            enbalebutton.click()
        }
    }
    
    var startWorkbutton = document.querySelector("#app > section > main > div > div.work-page > div.work-content > div.part-time__job.info-item > div.center-block.Alegreya-Bold > div > button");
    if(startWorkbutton){
        startWorkbutton.click()
    }
    
    
}

doclick()
