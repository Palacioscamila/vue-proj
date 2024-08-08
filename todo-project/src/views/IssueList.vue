<template>
    <div>
      <h1>lista de problemas</h1>
      <el-button type="success" @click="getIssues()">Obtener emisión</el-button>
      <el-row :gutter="12">
        <!-- Índice de código 1 también añadido para su uso-->
        <el-col :span="12"  v-for="( issue, index ) in issues" :key="issue.id">
          <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
            <el-row :gutter="12">
              <el-col :span="21">{{ issue.title }}</el-col>
              <el-col :span="3">
                <!-- Código 2. @click="closeIssue(index)"Añade. -->
                <el-button @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
<script>
 import axios from 'axios';
 const client = axios.create({
  baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
    // Modificación de las variables de entorno
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
  },
})

export default {
  name: 'IssueList',
  data () {
    return {
      issues: []
    }
  },
  methods: {
    closeIssue(index){
      this.issues.splice(index, 1);
    },
    getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data;
      })
    }
  }
}
</script>