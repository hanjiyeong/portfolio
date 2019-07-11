<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>폰트 테스트...</p>
    <p class="fw100">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw200">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw300">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw400">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw500">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw600">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw700">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw800">홈 프로젝트 타임라인 블로그 내소개</p>
    <p class="fw900">홈 프로젝트 타임라인 블로그 내소개</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
