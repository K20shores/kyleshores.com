import Citation from '../../components/Citation';
import Script from 'next/script';


[^1]: <Citation key="hairer1993" />
[^2]: <Citation key="hairer1996" />

<Script src="/blog/js/posts/what_is_an_ode.js" strategy="lazyOnload" />

<style>

figure > div {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

#inputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#inputs > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

#inputs label {
  margin-right: 10px;
}

@media (max-width: 768px) {
  #inputs {
    flex-direction: column;
    align-items: center; /* Align items to start in column layout */
  }

  #inputs > div {
    margin-bottom: 10px; /* Optional: You can adjust the margin as needed */
  }
}
</style>