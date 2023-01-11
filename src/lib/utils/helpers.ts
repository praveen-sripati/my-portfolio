export function handleSmoothScrolling(event: any) {
  event.preventDefault();
  const link = event.currentTarget;
  const anchorId = new URL(link.href).hash.replace('#', '');
  const anchor = document.getElementById(anchorId);
  if (anchor)
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: 'smooth'
    });
}

export function handleKeyPress(event: any) {
  event.preventDefault();
  if(event.keyCode == 32){
    handleSmoothScrolling(event)
  }
}