module.exports = {
	eslint: {
		'vue2 + js': [
			'@vue/eslint-config-prettier@^6.0.0',  
			'babel-eslint@^10.1.0',
			'eslint@^6.7.2',
			'eslint-plugin-prettier@^3.3.1',
			'eslint-plugin-vue@^6.2.2',
			'prettier@2.2.1',
			'@prettier/plugin-pug@^1.16.5'
		],
		'vue2 + ts': [
			'@typescript-eslint/eslint-plugin@^4.18.0',
    		'@typescript-eslint/parser@^4.18.0',
			'@vue/eslint-config-prettier@^6.0.0',
			'@vue/eslint-config-typescript@^7.0.0',
			'eslint@^6.7.2',
			'eslint-plugin-prettier@^3.3.1',
			'eslint-plugin-vue@^6.2.2',
			'prettier@2.2.1',
			'@prettier/plugin-pug@^1.16.5'
		],
		'vue3 + js': [
			'@vue/eslint-config-prettier@^6.0.0',  
			'babel-eslint@^10.1.0',
			'eslint@^6.7.2',
			'eslint-plugin-prettier@^3.3.1',
			'eslint-plugin-vue@^7.0.0',
			'prettier@2.2.1',
			'@prettier/plugin-pug@^1.16.5'
		],
		'vue3 + ts': [
			'eslint@^6.7.2',
			'eslint-plugin-prettier@^3.3.1',
			'eslint-plugin-vue@^7.0.0',
			'prettier@2.2.1',
			'@typescript-eslint/eslint-plugin@^4.18.0',
    		'@typescript-eslint/parser@^4.18.0',
			'@vue/eslint-config-prettier@^6.0.0',
    		'@vue/eslint-config-typescript@^7.0.0',
    		'@prettier/plugin-pug@^1.16.5'
		],
		'node + js': [
			'eslint',
			'eslint-plugin-prettier',
			'eslint-config-prettier',
			'prettier@2.2.1'
		],
		'node + ts': [
			'@typescript-eslint/eslint-plugin',
			'@typescript-eslint/parser',
			'eslint',
			'prettier@2.2.1',
			'eslint-config-prettier',
			'eslint-plugin-prettier'
		]
	},
	husky: ['@commitlint/config-conventional@9', '@commitlint/cli@9', 'husky@4', 'lint-staged@10.5.4'],
}
