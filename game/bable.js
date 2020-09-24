const grid = document.getElementById('grid');

const setting = {
    width: 5,
    height: 6,
}
const cards = [
    {
        name: "apu",
        element: `<div class="apu">
            <div class="head">
                <div class="hair hair1"></div>
                <div class="hair hair2"></div>
                <div class="body head-main1"></div>
                <div class="circle body ear">
                    <div class="no-border circle inner1"></div>
                    <div class="no-border circle inner2"></div>
                </div>
                
                <div class="no-border body neck1"></div>
                
                <div class="hair sideburn">
            <div class="no-border hair clip"></div>
            </div>
                
                <div class="circle body eyebrow"></div>
                <div class="circle body eyebag1"></div>
                
                <div class="circle left-eye eye">
                    <div class="no-border circle pupil"></div>
            <div class="no-border body eyelid-top"></div>
            <div class="no-border body eyelid-bottom"></div>
                </div>
                
                <div class="circle right-eye eye">
                    <div class="no-border circle pupil"></div>
            <div class="no-border body eyelid-top"></div>
            <div class="no-border body eyelid-bottom"></div>
                </div>
                
                <div class="circle body mouth2"></div>
                
                <div class="body tooth tooth1"></div>
                <div class="body tooth tooth2"></div>
                <div class="body tooth tooth3"></div>
                <div class="body tooth tooth4"></div>
                
                <div class="circle body mouth1"></div>
            <div class="no-border circle eyebag2"></div>
                <div class="no-border circle body mouth3"></div>
                
                <div class="no-border body neck2"></div>
                
                <div class="body nose-tip"></div>
                <div class="no-border body nose"></div>
                
                <div class="no-border moustache moustache-left"></div>
                <div class="no-border moustache moustache-right"></div>
            </div>
        </div>`
    },

    {
        name: "bart",
        element: `<div class="bart">
        <div class="head">
            <div class="no-border body hair hair1"></div>
            <div class="no-border body hair hair2"></div>
            <div class="no-border body hair hair3"></div>
            <div class="no-border body hair hair4"></div>
            <div class="no-border body hair hair5"></div>
            <div class="no-border body hair hair6"></div>
            <div class="no-border body hair hair7"></div>
            <div class="no-border body hair hair8"></div>
            <div class="no-border body hair hair9"></div>
            <div class="body mouth-lip2"></div>
            <div class="no-border body head-left1"></div>
            <div class="no-border body head-left2"></div>
            <div class="no-border body head-left3"></div>
            <div class="no-border body head-left4"></div>
            <div class="no-border body head-left5"></div>
            <div class="no-border body head-left6"></div>
            <div class="no-border body head-left7"></div>
            <div class="body eyelid"></div>
            <div class="no-border body mouth"></div>
            <div class="body mouth-lip"></div>
            <div class="no-border body head-right2"></div>
            <div class="no-border body head-right1"></div>
            <div class="no-border body head-right3"></div>
            
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
            
    
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
            
            
            <div class="no-border body nose"></div>
            <div class="body nose-tip"></div>
          
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
	    
            <div class="no-border mouth-smile"></div>
        </div>
    </div>`
    },

    {
        name:"homer",
        element: `<div class="homer">
        <div class="head">
            
            <div class="hair1"></div>
            <div class="hair2"></div>
            <div class="body head-top"></div>
            <div class="no-border body head-main"></div>
   
            <div class="no-border m1"></div>
            <div class="no-border m2"></div>
            <div class="no-border m3"></div>
            <div class="no-border m4"></div>
       
            <div class="no-border neck1"></div>
            <div class="body neck2"></div>
       
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
         
            <div class="mouth">
                <div class="mouth5"></div>
                <div class="mouth2"></div>
                <div class="mouth1"></div>
                <div class="mouth7"></div>
                <div class="no-border mouth3"></div>
                <div class="no-border mouth4"></div>
                <div class="no-border mouth6"></div>
                <div class="no-border mouth8"></div>
            </div>
          
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
           
            <div class="body nose"></div>
            <div class="body nose-tip"></div>
          
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
        </div>
    </div>`
    },

    {
        name:"hkrusty",
        element:`<div class="krusty">
        <div class="head">
            <div class="body ear left-ear"></div>
            <div class="body head-top"></div>
            <div class="hair hair1"></div>
            <div class="hair hair2"></div>
            <div class="hair hair3"></div>
            <div class="hair hair4"></div>
            <div class="hair hair5"></div>
            <div class="hair hair6"></div>
            <div class="hair hair7"></div>
            <div class="hair hair8"></div>
            <div class="hair hair9"></div>
            <div class="hair hair10"></div>
            <div class="hair hair11"></div>
            <div class="hair hair12"></div>
            <div class="hair hair13"></div>
            <div class="hair hair41"></div>
            <div class="hair hair42"></div>
            <div class="hair hair43"></div>
            <div class="hair hair44"></div>
            
            <div class="hair hair14"></div>
            <div class="hair hair15"></div>
            <div class="hair hair16"></div>
            <div class="hair hair17"></div>
            <div class="hair hair18"></div>
            <div class="hair hair19"></div>
            <div class="hair hair20"></div>
            <div class="hair hair21"></div>
            <div class="hair hair22"></div>
            <div class="hair hair23"></div>
            <div class="hair hair24"></div>
            <div class="hair hair25"></div>
            <div class="hair hair36"></div>
            <div class="hair hair37"></div>
            <div class="hair hair38"></div>
            <div class="hair hair39"></div>
            <div class="hair hair40"></div>
            
            <div class="body ear right-ear">
            <div class="inner"></div>
            </div>
            
            <div class="hair hair26"></div>
            <div class="hair hair27"></div>
            <div class="hair hair28"></div>
            <div class="hair hair29"></div>
            <div class="hair hair30"></div>
            <div class="hair hair31"></div>
            <div class="hair hair32"></div>
            <div class="hair hair33"></div>
            <div class="hair hair34"></div>
            <div class="hair hair35"></div>
            <div class="mouth mouth-bottom"></div>
            <div class="no-border mouth mouth-left"></div>
            <div class="no-border mouth mouth-right"></div>
            <div class="no-border mouth mouth-right2"></div>
            <div class="no-border mouth-inner mouth-inner-bottom"></div>
            <div class="no-border mouth-inner mouth-inner-top"></div>
            <div class="no-border tongue tongue1"></div>
            <div class="no-border tongue tongue2"></div>
            <div class="no-border tongue tongue3"></div>
            <div class="cheek cheek-left"></div>
            <div class="cheek cheek-right"></div>
            <div class="tooth tooth1"></div>
            <div class="tooth tooth2"></div>
            <div class="tooth tooth3"></div>
            <div class="tooth tooth4"></div>
            <div class="tooth tooth5"></div>
            <div class="mouth mouth-top2"></div>
            <div class="no-border cheek cheek-right-inner"></div>
            <div class="cheek cheek-line"></div>
            <div class="no-border cheek cheek-left-inner"></div>
            <div class="left-eye eye">
            <div class="no-border pupil"></div>
            </div>
            
            <div class="mouth mouth-top1"></div>
            <div class="body eye-bag"></div>
            
            <div class="right-eye eye">
            <div class="no-border pupil"></div>
            </div>
            
            <div class="eyebrow"></div>
            
            
            <div class="nose"></div>
        </div>
        </div>`
    },

    {
        name: "lisa",
        element: `<div class="lisa">
        <div class="head">
        
        <div class="no-border body head-main"></div>
            <div class="no-border body head-main2"></div>
            <div class="no-border body head-main3"></div>
        
        <div class="no-border hair9"></div>
        <div class="no-border hair10"></div>
        
        <div class="body hair hair1"></div>
        <div class="body hair hair2"></div>
        <div class="body hair hair3"></div>
        <div class="body hair hair4"></div>
        <div class="body hair hair5"></div>
        <div class="body hair hair6"></div>
        <div class="body hair hair7"></div>
        <div class="body hair hair8"></div>
            
            <div class="body mouth-lip2"></div>
            <div class="body mouth-lip"></div>
            <div class="no-border body neck"></div>
            <div class="no-border body mouth"></div>
            <div class="no-border body neck2"></div>
            <div class="no-border body neck3"></div>
            <div class="no-border mouth-smile"></div>
        
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
        
            <div class="no-border eyelash1 eyelash"></div>
            <div class="no-border eyelash2 eyelash"></div>
            <div class="no-border eyelash3 eyelash"></div>
            <div class="no-border eyelash4 eyelash"></div>
            <div class="no-border eyelash5 eyelash"></div>
            <div class="no-border eyelash6 eyelash"></div>
            <div class="no-border eyelash7 eyelash"></div>
            <div class="no-border eyelash8 eyelash"></div>
        
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
        <div class="no-border body eyelid-top"></div>
        <div class="no-border body eyelid-bottom"></div>
            </div>
            
            <div class="no-border body nose"></div>
            <div class="body nose-tip"></div>
            
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
        <div class="no-border body eyelid-top"></div>
        <div class="no-border body eyelid-bottom"></div>
            </div>
        
        <div class="necklace necklace1"></div>
        <div class="necklace necklace2"></div>
        <div class="necklace necklace3"></div>
        <div class="necklace necklace5"></div>
        <div class="necklace necklace4"></div>
        </div>
    </div>`
    },

    {
        name: "ralph-wiggum",
        element:`    <div class="ralph-wiggum">
        <div class="head">
                
                <div class="body head1"></div>
                <div class="no-border body head2"></div>
                <div class="hair hair-left hair1"></div>
                <div class="hair hair-left hair2"></div>
                <div class="hair hair-left hair3"></div>
                <div class="hair hair-left hair4"></div>
                <div class="hair hair-left hair5"></div>
                <div class="hair hair-left hair6"></div>
                <div class="hair hair-left hair7"></div>
                <div class="hair hair-right hair8"></div>
                <div class="hair hair-right hair9"></div>
                <div class="hair hair-right hair10"></div>
                <div class="hair hair-right hair11"></div>
                <div class="hair hair-right hair12"></div>
                
                <div class="body ear">
                <div class="inner1"></div>
                <div class="inner2"></div>
                <div class="no-border body clip"></div>
                </div>
                
                <div class="no-border body mouth5"></div>
                <div class="body mouth1"></div>
                <div class="no-border body mouth2"></div>
                <div class="no-border body mouth3"></div>
                <div class="no-border body mouth4"></div>
                
                <div class="left-eye eye">
                <div class="no-border pupil"></div>
                </div>
                
                <div class="right-eye eye">
                <div class="no-border pupil"></div>
                </div>
                
                <div class="body nose"></div>
        </div>
    </div>`
    },

    {
        name: "marge",
        element:`<div class="marge">
        <div class="head">
            <div class="no-border body head-main"></div>
            <div class="body mouth-lip2"></div>
            <div class="body mouth-lip"></div>
            <div class="no-border body neck"></div>
            <div class="no-border body mouth"></div>
            <div class="no-border body neck2"></div>
            <div class="no-border body neck3"></div>
            <div class="no-border mouth-smile"></div>
	    
            <div class="hair hair1 hair-circle"></div>
            <div class="hair hair2 hair-circle"></div>
            <div class="hair hair3 hair-circle"></div>
            <div class="hair hair4 hair-circle"></div>
            <div class="hair hair5 hair-circle"></div>
            <div class="hair hair6 hair-circle"></div>
            <div class="hair hair7 hair-circle"></div>
            <div class="hair hair8 hair-circle"></div>
            <div class="hair hair9 hair-circle"></div>
            <div class="hair hair10 hair-circle"></div>
            <div class="hair hair11 hair-circle"></div>
            <div class="hair hair12 hair-circle"></div>
            <div class="hair hair13 hair-circle"></div>
            <div class="hair hair14 hair-circle"></div>
            <div class="hair hair15 hair-circle"></div>
            <div class="hair hair16 hair-circle"></div>
            <div class="hair hair17 hair-circle"></div>
            <div class="hair hair18 hair-circle"></div>
            <div class="hair hair19 hair-circle"></div>
            <div class="hair hair20 hair-circle"></div>
            <div class="hair hair21 hair-circle"></div>
            <div class="hair hair22 hair-circle"></div>
            <div class="hair hair23 hair-circle"></div>
            <div class="hair hair24 hair-circle"></div>
            <div class="hair hair25 hair-circle"></div>
            <div class="hair hair26 hair-circle"></div>
            <div class="hair hair27 hair-circle"></div>
            <div class="hair hair28 hair-circle"></div>
            <div class="hair hair29 hair-circle"></div>
            <div class="hair hair30 hair-circle"></div>
            <div class="no-border hair hair-main"></div>
            <div class="no-border hair hair-main2"></div>
            <div class="no-border hair hair-main3"></div>
            <div class="no-border hair hair-main4"></div>
            <div class="no-border hair hair-main5"></div>
            <div class="no-border hair hair-main6"></div>
            <div class="no-border hair hair-main7 hair-circle"></div>
            
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
	    
            <div class="no-border eyelash1 eyelash"></div>
            <div class="no-border eyelash2 eyelash"></div>
            <div class="no-border eyelash3 eyelash"></div>
            <div class="no-border eyelash4 eyelash"></div>
            <div class="no-border eyelash5 eyelash"></div>
            <div class="no-border eyelash6 eyelash"></div>
            <div class="no-border eyelash7 eyelash"></div>
            <div class="no-border eyelash8 eyelash"></div>
     
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
          
            <div class="no-border body nose"></div>
            <div class="body nose-tip"></div>
           
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
		<div class="no-border body eyelid-top"></div>
		<div class="no-border body eyelid-bottom"></div>
            </div>
        </div>
    </div>`
    },
    
    {
        name: "ned-flanders",
        element:`<div class="ned-flanders">
        <div class="head">
            <div class="hair-top hair"></div>
            <div class="hair-side hair"></div>
            <div class="no-border neck-bottom"></div>
            <div class="no-border neck-left"></div>
            <div class="body lip"></div>
            <div class="no-border body head-main"></div>
            <div class="no-border hair-line1 hair-line"></div>
            <div class="no-border hair-line2 hair-line"></div>
            <div class="no-border hair-line3 hair-line"></div>
            <div class="no-border hair-line4 hair-line"></div>
            <div class="no-border hair-line5 hair-line"></div>
            <div class="body head-top"></div>
            <div class="no-border body eye-bulge"></div>
            <div class="no-border body head-top-inner"></div>
            <div class="no-border neck-right"></div>
            <div class="body ear">
            <div class="no-border inner"></div>
            </div>
            <div class="no-border sideburn hair"></div>
            <div class="no-border body head-side"></div>
            
            <div class="left-eye eye">
            <div class="no-border pupil"></div>
            <div class="no-border body eyelid-top"></div>
            <div class="no-border body eyelid-bottom"></div>
            </div>
            
            <div class="right-eye eye">
            <div class="no-border pupil"></div>
            <div class="no-border body eyelid-top"></div>
            <div class="no-border body eyelid-bottom"></div>
            </div>
            
            <div class="no-border glasses"></div>
            
            <div class="no-border mouth-top"></div>
            <div class="no-border mouth-left"></div>
            <div class="no-border mouth-right"></div>
            <div class="no-border mouth-bottom"></div>
            <div class="no-border mouth-inner"></div>
            <div class="no-border tongue"></div>
            
            <div class="moustache">
            <div class="no-border moustache-hair1 hair left"></div>
            <div class="no-border moustache-hair2 hair left"></div>
            <div class="no-border moustache-hair3 hair left"></div>
            <div class="no-border moustache-hair4 hair right"></div>
            <div class="no-border moustache-hair5 hair right"></div>
            <div class="no-border moustache-hair6 hair right"></div>
            </div>
            
            <div class="body nose"></div>
        </div>
        </div>`
    }
];

for (let i = 0 ; i < setting.height ; i++){

}



for (let i = 0; i<setting.height; i++) {
    for (let j = 0; j < setting.width; j++) {
        let div = document.createElement('article');
        div.classList.add('hide');
        let element = cards[Math.floor(Math.random() * cards.length)];
        div.innerHTML = element.element;
        grid.appendChild(div);
    }
}

for (let i=0; document.getElementsByTagName('article').length; i++){
    const cardHtml =  document.getElementsByTagName('article')[i];
    cardHtml.onclick = function(event) {
        event.preventDefault;
        if(last !== document.getElementsByTagName('article')[i].getElementsByTagName('div')[0].classList.value) {
            setTimeout(function(){
                document.getElementsByTagName('article')[i].classList.add ('hide');    
            }, 2000) 
        }
        last = document.getElementsByTagName('article')[i].getElementsByTagName('div')[0].classList.value;
    }
    console.log(document.getElementsByTagName('article'))
}