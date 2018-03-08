<template>
  <div class="course-list">
    <h1>Courses</h1>
    <div v-for="course in courses" v-bind:key="course.id">
      <p @click="setEdit(course)" v-if="!editing">
        {{course.name}}
      </p>
<div v-else>
  <input type="text" v-model="course.name">
  <button @click="saveCourse(course)">Save</button>
  <button @click="removeCourse(course)">Remove</button>
</div>  
    </div>
    <div v-if="!editing">
      <input type="text" v-model="courseName" placeholder="Course name"> 
      <button @click="addCourse(courseName)">Add</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      ROOT_URL: 'http://localhost:3000/courses/',
      courses: [],
      courseName: '',
      editing: false,
    };
  },
  created() {
    this.getCourseList();
  },
  methods: {
    getCourseList() {
      axios
        .get(this.ROOT_URL)
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => console.log(error));
    },
    addCourse(name) {
      axios
        .post(this.ROOT_URL, { name })
        .then(response => {
          this.courses.push(response.data);
          this.courseName = '';
        })
        .catch(error => console.log(error));
    },
    setEdit(course) {
      this.editing = !this.editing;
    },
    saveCourse(course) {
      this.setEdit();
      axios
        .put(`${this.ROOT_URL}/${course.id}`, { ...course })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));
    },
    removeCourse(course) {
      axios
        .delete(`${this.ROOT_URL}/${course.id}`)
        .then(response => {
          this.setEdit();
          this.courses = this.courses.filter(c => c.id != course.id);
        })
        .catch(error => console.error(error));
    },
  },
};
</script>

<style>
.course-list {
  background-color: rebeccapurple;
  padding: 10px;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  color: white;
}
input {
  width: 8 0%;
}
</style>
