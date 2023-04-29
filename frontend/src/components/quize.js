import React, { useState, useRef, useEffect } from 'react';
import "./style1.css"


function Quize() {
  const [score, setScore] = useState(0);
  const[count,setCount]=useState(0);
  const [result, setResult] = useState("");
  const imageRef = useRef(null);
  
 /* 
  const isMobileDevice = () => {
    return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
  }
  */
  

  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const dataTransfer = event.dataTransfer;
    const target = event.target;
  
    dataTransfer.setData("image", target.id);
    target.style.position = "absolute";
    target.style.left = `${touch.clientX}px`;
    target.style.top = `${touch.clientY}px`;
  }
  

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const draggedImage = imageRef.current;
  
    draggedImage.style.left = `${touch.clientX}px`;
    draggedImage.style.top = `${touch.clientY}px`;
  }
  
  const handleTouchEnd = (event) => {
    const dataTransfer = event.dataTransfer;
    const data = dataTransfer.getData("image");
    const draggedImage = document.getElementById(data);
    const dropzone = event.target;
    const dropzoneId = dropzone.id;
  
    if (dropzoneId === data) {
      setScore(score + 1);
     
    }
  
    draggedImage.style.position = "";
    draggedImage.style.left = "";
    draggedImage.style.top = "";
    dropzone.appendChild(draggedImage);
  }
  

  const handleDragStart = (event) => {
    event.dataTransfer.setData("image", event.target.id);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("image");
    const draggedImage = document.getElementById(data);
    const dropzone = event.target;
    const dropzoneId = dropzone.id;
  
    if (dropzoneId === data) {
      setScore(score + 1);
      setCount(count + 1);
    } else {
      setCount(count + 1);
    }
  
    if (draggedImage instanceof Node) {
      let parent = dropzone.parentNode;
      while (parent !== document) {
        if (parent === draggedImage) {
          console.error("draggedImage is an ancestor of the parent");
          return;
        }
        parent = parent.parentNode;
      }
      dropzone.appendChild(draggedImage);
    } else {
      console.error("draggedImage is not a valid Node object");
    }
  }
  

  
  useEffect(() => {
    if (score === 3 && count>5) {
      setResult("You Won!");

    }
    else if(count>5 && score<3){
        setResult("You loose!");
    }
    
  }, [score,count]);

 /* useEffect(() => {
    const images = document.querySelectorAll('.drag-image');
    images.forEach(image => {
      if (!isMobileDevice()) {
        image.addEventListener('dragstart', handleDragStart);
        image.addEventListener('dragend', handleDrop);
      } else {
        image.addEventListener('touchstart', handleTouchStart);
        image.addEventListener('touchmove', handleTouchMove);
        image.addEventListener('touchend', handleTouchEnd);
      }
    });
  }, []);
  */

  return (
    <div className='quize'>
      <div className="score">
        Score: {score}
      </div>
      
      <div className="images">
        <img
          id="image1"
          className="imag"
          alt=""
          src="../photos/flower.jpg"
          onDragStart={handleDragStart}
          onDragEnd={handleDrop}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={imageRef}
          //draggable="true"
          //onDragStart={handleDragStart}
        />
        <img
          id="image2"
          className="imag"
          alt=""
          src="../photos/lily.jpg"
          onDragStart={handleDragStart}
          onDragEnd={handleDrop}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={imageRef}
          //draggable="true"
          //onDragStart={handleDragStart}
        />
        <img
          id="image3"
          className="imag"
          alt=""
          src="../photos/burger.jpg"
          onDragStart={handleDragStart}
          onDragEnd={handleDrop}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={imageRef}
          //draggable="true"
          //onDragStart={handleDragStart}
        />
      </div>
      <div className="dropzones">
        <div
          id="image2"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onTouchEnd={handleTouchEnd}
          className="dropzone"
        >
          Lily
        </div>
        <div
          id="image1"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onTouchEnd={handleTouchEnd}
          className="dropzone"

        >
         Flower
        </div>
        <div
          id="image3"
          onDragOver={handleDragOver}
          onTouchEnd={handleTouchEnd}
          onDrop={handleDrop}
          
          className="dropzone"
        >
        
          Bergur
        </div>
        

      </div>
      <div className={result ? 'result' : 'hide'}>{result}</div>
      
    </div>
  );
}

export default Quize;


