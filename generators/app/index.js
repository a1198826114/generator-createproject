const Generator=require('yeoman-generator')
module.exports=class extends Generator{
    prompting(){
        return this.prompt({
            //这一部分的代码作用就是给你之后新生成的文件命名，如果之后你直接敲回车的话，名字默认是你外层文件夹的名字
            type:'input',
            name:'name',
            message:'请输入你项目的名字',
            default:this.appname
        }).then((answers)=>{
            this.answers=answers
        })
    }
    writing(){
        //通过模板的方式向目标文件传参
        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue'
          ]
        templates.forEach((item)=>{
            const tmol=this.templatePath(item)
            const output=this.destinationPath(item)
            //通过模板的方式向目标文件传参
            const text=this.answers//向模版传递的参数
            this.fs.copyTpl(tmol,output,text) 
          })
    }
}