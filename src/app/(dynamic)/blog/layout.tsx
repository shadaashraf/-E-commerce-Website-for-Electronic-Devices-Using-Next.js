function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
      <div>
        {children}
      </div>
    )
  }
  
export default BlogLayout;