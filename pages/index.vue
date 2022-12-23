<template>
  <div>
    <NavigationBar />
    <body>
  <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="loginView">Log Out</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
 <div class="container">
    <br>
    <div class="form-inline" action="#">
      <input  id="form-name" v-model="item.quan" type="number"  placeholder="Id Number" class="form-control">
      <input id="form-name" v-model="item.name" type="text" required  placeholder="Student Name" class="form-control">
      <input v-model="item.desc" type="text" required placeholder="Address" class="form-control" @:keyup.enter="addItem">
    <button  class="btn btn-danger" @click="addItem"><i class="fas fa-plus">Add Student</i></button>
      </div>
    <br><br>
    <table class="table table-striped table-bordered table-sm">
      <thead class="thead-light">
        <th style="width:50px">Id Number</th>
        <th style="width:250px">Student Name</th>
        <th>Address</th>
        <th class="col-2">Modify</th>
      </thead>
      <tr v-for="item in items" :key="item.name">
        <td>
          <input v-model="item.quan" v-if="item.edit" type="number"  v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.quan}} </span>
        </td>
        <td>
          <input v-model="item.name" v-if="item.edit" type="text"   v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.name}} </span>
        </td>
        <td>
          <input v-if="item.edit" type="text" v-model="item.desc" v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.desc}} </span>
        </td>
        <td><button @click="item.edit = !item.edit" class="btn btn-info">Edit<i class="far fa-edit"></i></button>
          <button @click="removeItem(index)" class="btn btn-danger">Delete<i class="far fa-trash-alt"></i></button></td>
      </tr>
    </table>
</div>
  </div>

</body>
        
  
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
