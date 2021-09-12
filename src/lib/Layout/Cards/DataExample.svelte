<div class="data">
    <div class="circle">
      <div class="part" />
      <div class="bar" />
    </div>

    <div class="content">
      <h4>0.299 BTC</h4>
      <span>Weekly earning</span>
    </div>

    <div class="circle-button" />
  </div>

  <style>
       .data {
    display: flex;
    height: 100%;
  }

  h4 {
    grid-area: data;
    font-size: 1.5rem;
    color: #688EFF;
    margin-bottom: 0.5rem
  }
  span {
    display: block;
  }
  .circle-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    max-height: 40px;
    max-width: 40px;
    background-color: #688EFF;
    margin-left: auto;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .circle {
    grid-area: circle;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-right: 5%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid coral;
    border-left-color: #171c24;
  }
 
  </style>