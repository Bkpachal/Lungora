(function(){var o=document.getElementById('menuOpen'),c=document.getElementById('menuClose'),p=document.getElementById('mobilePanel');
if(o&&p){o.addEventListener('click',function(){p.classList.add('show');o.setAttribute('aria-expanded','true')});
function x(){p.classList.remove('show');o.setAttribute('aria-expanded','false')}c.addEventListener('click',x);p.querySelectorAll('a').forEach(function(a){a.addEventListener('click',x)})}
var s=document.getElementById('stickyCta'),h=document.querySelector('.hero');
if(s&&h){window.addEventListener('scroll',function(){s.classList.toggle('show',h.getBoundingClientRect().bottom<0)},{passive:true})}})();