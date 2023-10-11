// asideではブログリストをStaticで受け取り表示、再読み込みボタン
// mainにChildrenで受け取ったコンポーネントを表示

import BlogListStatic from '../components/blog-list-static'
import RefreshBtn from '../components/refresh-btn'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        {/*@ts-ignore*/}
        <BlogListStatic />
        <div className="flex justify-center">
          <RefreshBtn />
          <p>
            個別ページ部分はダイナミックセグメントのため、毎回ハードナビゲーション
          </p>
          <p>
            この左ペイン合わせたBlogセグメント全体をリフレッシュしたい場合は、上のボタン`router.refresh()`を実行
          </p>
        </div>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
