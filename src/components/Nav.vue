<template>
	<nav id="nav">
		<ul><!-- 메뉴명을 span으로 한 번 더 감쌀 것 -->
			<li><router-link to="/project">프로젝트</router-link></li>
			<li><router-link to="/timeline">타임라인</router-link></li>
			<li><router-link to="/">내소개</router-link></li>
		</ul>
	</nav>
</template>

<script>
  export default {
    //name: 'nav'
  }
</script>
