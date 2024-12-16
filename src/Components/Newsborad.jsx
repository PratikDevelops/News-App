import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchNews() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=96c7ec243cba420ab799a1df49c68108`
      );
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div>
      <h2>Latest News</h2>
      {loading && <p>Loading news...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {articles.length > 0 &&
          articles.map((news) => (
            <NewsItem
              key={news.url}
              title={news.title || "No Title Available"}
              description={news.description || "No Description Available"}
              src={news.urlToImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAACLCAMAAAB/aSNCAAAAsVBMVEUBhN7///8Fgd0Af90Agt4Afd0Ae9w7OztAQED6+voAc9oAgN5kZGScnJxEREQAetxra2swMDC1z/KLvOxRn+RUVFR4eHisy/CFuOuBtOpCmOP3/P6/2vSjx++Ywu2Rvu1yqudyr+inye9mpOY2lOIhjeHk8vvh7/m1z/O/1fNtp+ZTnOQ/leMljuASiN9VoeTH3vNRUVHm5ucnJyfb6Ph0dHTr6+vA3vUXFxfY2NikpKQv8KRFAAAFw0lEQVR4nO2dDXuaSBSFGRhoV7qhNXb9ilo1YhP8atbd7vb//7C9dxAVNd082fRAuueNGMAxhZf7HIaxj3h3ZZontJvtIyYFgzLDS4yGoxOuj+l0dDqhq1O3656+xzjn0wn3jqn+lFivW0KmUyaPgt4JC8dtmeVyqVOJ2SkreazkcYJ3hO+FZYIfRFw8uSmO3dOz8HXaczxfwlqr01PwdMrZz7wgu7/pv/xfJpehahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1jBqotmffJVb1Fv0YKlcdhL38C/AOrFdhqYmN4yP7cQzewpeiatXhqG/O+Xr8XYC2Nx5nhV97Ox7PqtjQ/07FqpPmBdHCPDq0CYayoliIu8b0XmfCVKva9i6bNqZ7iIlgJMubJF+Ix1T9LLRgPx7zxXH1YDaHsnaqzX3unqqfSTgx5urNGb8/mLSxbxRcm/nG9HP3VP1MnOq3Z3w4VZ1K0DRdhBxUWxs2kkaS70AQ7PTHwS55/HyV7xrVotNSA9VPqOp+Y2NMptt6UB3OJmmabj5ptS8mg6lbGXQHnUBnbNZuS7uwd6ONxhXs2xnVq35/zrsz1f6tMan2tveqk2sJcO0obnR1cd4Mi85KdGPMzAuLRqsL/zia6lVfpqzarJK2MYOoUG2dxLuFP5Pz6k3iRZLlVq871/LWscZFkppt5C2M2bbi7PomenwbYFSsevBU1TaU4ry1dlfVVqp80pDfyVCXg47ki7gOm2Zr7sSrXRrTCUI5Pl6ssV3hPu55Laq94JNUaFIEiDjt5z3toG/akTczZhi4hbXpB/l7Zq7Y61DPOa9GtXqTQt2pjvtm0IgUOWFK22SueeFncgIV2742luOi3fZmUouS9l6H6o5TbWd6etPiFtUyv7nJSbWMRWrf9yQwmqK+Gep5cqSKJXXS0aoelV296t9K/KG8f7ig2p0Jbxr37rRYuqAXybpi6kepuY+6Ei3xWvND9m651QbtWriuXvWXt1envPn7VLUbzJOUMItWobrZ2d/1RLocYnkS9Uw/1OJfSH9l7qLcRveSO2YbPrIBSKpX/aQAcap97bvNigDpRvsbochrUdPMGyPtfSRbifE0zw99U3IrR+i6BoH9SlTnlyCRdMNdgHh+fz/Wl+NPjYm2EiJ6Ft0G2jHcv7Qyx6NXlVG96vfvzvj4ID2JfaN9VXtWOnObvLMnF4OLwDsad7Kun6crZno8dvnhXpJOyZaqRfW3X8/5s6S6W6j24qlW/O4Spt9LND0au4rfmK/u6kUTRDJEE8P2gjD2Ewn2dg3CuuLx6kcD5LJqN7ThxkAC6V+bzWTYbs/zrHErpro7bnx7oQUt+u+607bhGEhe1b9cwJwGyLJYkNw1Ld3ocJ0WRyWv2NnxnBua8sJdkzSrwyhq9Z/CXH04469SZ8+bTbP9fLzIsrxE/bCl98obtHa74C+yRZ7NNivmgtZkMJhMg6o/rHZUuxF+6zSrvymS1aWxuOPbxR1uIiey9U56/vkrR00CaVIL0VWr9oL5I1m9romfF6TiPbK3l/4biFxy1KDH8NJUXTzxarS7cennz83PuzuXDpc/oenKVctlSRhG8iNE8lsJg9f5kfi/ULnq/w9UDYOqYVA1DKqGQdUwqBoGVcOgahhUDYOqYVA1DKqGQdUwqBqG7/2UY8N1hKphUDUMqoZB1TCoGgZVw6BqGFQNg6phUDUMqoZB1TCoGgZVw/A5Yo2CqmFQNQyqhkHVMKgaBlXDoGoYVA2DqmFQNQyqhkHVMKgaBgdRYVA1DKqGwayGwaqGQdUwqBqG79E1CJ4UYVA1DKqG4f8D0YSKChLFUIIAAAAASUVORK5CYII="}
            />
          ))}
      </div>
    </div>
  );
}

export default Newsboard;
