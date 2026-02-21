class ArticleWrite{
    constructor(page){
        this.page = page
        this.button = page.getByRole('button' , {name : 'Start creating now'})
        this.aiArticleBtn = page.getByRole('link' , {name : 'Write Article'})
        this.articleInput = page.getByPlaceholder('The future of artificial intelligence is...')
        this.articleLength = page.getByText('Short (500-800 words)')
        this.generateBtn = page.getByRole('button' , {name : 'Generate article'})
    }
    async generateArticle(article){
        await this.button.click();
        await this.aiArticleBtn.click();
        await this.articleInput.fill(article)
        await this.articleLength.click()   // select length to enable the button
        await this.generateBtn.click()
    }
}

export default ArticleWrite