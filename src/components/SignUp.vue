<template>
  <form>
    <div class="row p-5">
      <div class="offset-lg-4"></div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
          />
        </div>
        
        <button type="submit" class="btn btn-primary mx-auto">Register</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    }
};
</script>