<div class="card">
  <img class="avatar" src="/avatar.jpg" alt="Profile icon" />

  <h4>Jane Rotanson</h4>
  <span class="plan"> Your plan: <span class="blue"> Premium </span></span>
</div>

<style>
  .card {
    background-color: #171c24;
    border-radius: 12px;
    padding: 1rem 1rem;

    display: grid;
    column-gap: 20px;
    justify-content: start;
    grid-template-areas:
      "avatar name"
      "avatar plan";
  }
  .avatar {
    grid-area: avatar;
    align-self: center;

    object-fit: cover;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    max-height: 50px;
    max-width: 50px;
  }
  h4 {
      font-size: 0.9rem;
      align-self: end;
      margin-bottom: 0.2rem;
  }
  span {
      font-size: 0.8rem;
  }
</style>
