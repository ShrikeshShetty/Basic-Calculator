let math='';
    document.querySelector('.entry').value=math;

    document.getElementById('bt1').addEventListener('click',()=>{
      math='';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt2').addEventListener('click',()=>{
      math=math + '1';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt3').addEventListener('click',()=>{
      math=math + '2';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt4').addEventListener('click',()=>{
      math=math + '3';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt5').addEventListener('click',()=>{
      math=math + '+';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt6').addEventListener('click',()=>{
      math=math + '4';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt7').addEventListener('click',()=>{
      math=math + '5';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt8').addEventListener('click',()=>{
      math=math + '6';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt9').addEventListener('click',()=>{
      math=math + '-';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt10').addEventListener('click',()=>{
      math=math + '7';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt11').addEventListener('click',()=>{
      math=math + '8';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt12').addEventListener('click',()=>{
      math=math + '9';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt13').addEventListener('click',()=>{
      math=math + '*';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt14').addEventListener('click',()=>{
      math=math + '/';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt15').addEventListener('click',()=>{
      math=math + '.';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt16').addEventListener('click',()=>{
      math=eval(math);
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt17').addEventListener('click',()=>{
      math=math + '0';
      document.querySelector('.entry').value=math
    })

    document.getElementById('bt18').addEventListener('click',()=>{
      math = math.slice(0, -1);
      document.querySelector('.entry').value=math
    })

    document.getElementById('sqrt').addEventListener('click', () => {
      math = Math.sqrt(parseFloat(math)).toString();
      document.querySelector('.entry').value = math;
    });
    
   
    document.getElementById('power').addEventListener('click', () => {
      math += '**'; // This allows you to use JavaScript's exponentiation (e.g., 2**3)
      document.querySelector('.entry').value = math;
    });
  

    const bgElement = document.querySelector('.bg');
    const maxScrollHeight=320;                // Get the maximum scrollable height
window.addEventListener('scroll', () => {
  
  // Calculate the scroll percentage (between 0 and 1)
  const scrollPercentage = Math.min(window.scrollY / maxScrollHeight, 1); // Cap the value at 1
  
  // Calculate the new margin based on scroll percentage (0 to 390px)
  const marginValue = 387 * scrollPercentage;
  
  // Apply the new margin smoothly
  bgElement.style.margin = `${marginValue}px`;

});
