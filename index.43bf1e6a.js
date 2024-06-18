let t=0,e=0,n=0;const o=()=>{let o=t+e+n,d=t/o*100||0,l=e/o*100||0,c=n/o*100||0,a=document.getElementById("diagram"),u=document.querySelector(".diagram-container"),r=document.querySelector(".notice");o>0&&(r.style.opacity=0,r.style.display="none",u.classList.add("show")),a.style.setProperty("background",`conic-gradient(
            #3f8125 0% ${d}%, 
            orange ${d}% ${d+l}%, 
            red ${d+l}% ${d+l+c}%, 
            transparent ${d+l+c}% 100%)`),document.getElementById("total").textContent=o,document.getElementById("goodCount").textContent=t,document.getElementById("neutralCount").textContent=e,document.getElementById("badCount").textContent=n,document.getElementById("totalCount").textContent=o,document.getElementById("positivePercentage").textContent=`${d.toFixed(1)}%`,document.getElementById("percentageText").textContent=`${d.toFixed(1)}%`,document.getElementById("heartFill").style.transform=`scaleY(${d/100})`};document.querySelector(".feedback-buttons").addEventListener("click",d=>{let l=d.target.closest("button");l&&("likeButton"===l.id?t++:"neutralButton"===l.id?e++:"dislikeButton"===l.id&&n++,o())}),o();
//# sourceMappingURL=index.43bf1e6a.js.map
