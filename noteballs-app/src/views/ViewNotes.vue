<template>
  <div class="notes">
    <form class="card has-background-primary-dark mb-4 p-4">
      <div class="field">
        <label class="label has-text-white">New Note</label>
        <div class="control">
          <textarea class="textarea"
                    placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button has-background-primary is-link">Add New Note</button>
        </div>
      </div>
    </form>

    <div v-for="index in 3"
         :key="index"
         class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas architecto veritatis, vero ipsa earum mollitia
          eius. Suscipit quod voluptatem porro ratione reiciendis eaque tenetur sed, illo odit ipsam, unde dicta?
        </div>
      </div>
      <footer class="card-footer">
        <a href="#"
           class="card-footer-item">Edit</a>
        <a href="#"
           class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>