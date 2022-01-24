// 组件中文名唯一
export const name = '__CZ_NAME__'
// 组件名唯一
export const type = '__EN_NAME__'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [

]
// 配置
export const value = {
	layout: {
		// 宽高-默认值需要可修改
		size: {
			width: 480,
			height: 43,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {

	},
	widget: {
		componentVersion: version,
		name,
	},
}
