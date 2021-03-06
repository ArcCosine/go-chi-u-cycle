const shareEvent = (eve)=>{
      eve.preventDefault();
      const link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(document.getElementById("result-wrapper").textContent)} - ${document.title} ${window.location.href}`;
      window.open(link);
};

export default shareEvent;
