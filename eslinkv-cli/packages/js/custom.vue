<template lang="pug">
.widget-part.__EN_NAME__.fn-flex(:style="styles")
	h2 模板
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'
export default {
	mixins: [widgetMixin],
	name: '__EN_NAME__',
	// 这个方法是将index.component.ts文件中的配置传入到该组件中，不可少
	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	},
}
</script>
<style lang="scss" scoped>
.__EN_NAME__ {
	align-items: center;
	justify-content: center;
	color: #fff;
}
</style>
