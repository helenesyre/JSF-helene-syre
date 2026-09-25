# AI LOG

## ProductCard image aspect ratio

**Tool used:** Claude

**Date:** 20 September 2026

**Purpose:** To fix browser warnings on the product images: an aspect-ratio mismatch warning, and later a Largest Contentful Paint (LCP) warning telling me to add `loading="eager"`. The images wouldn't listen to the width and height attributes properly.

**Outcome:** Claude first tried fixing the aspect-ratio warning by adding `sizes` and a `w-full h-auto` class to the `Image`, which removed the warning but made the cards different sizes since each product photo has a different real aspect ratio. I reverted that and asked for images that are all the same size with no warnings. Claude then wrapped the image in a fixed `aspect-square` container and used the `fill` prop with `object-cover` instead of fixed `width`/`height`, which keeps every card the same size and removes the mismatch warning entirely. For the LCP warning, Claude added a `priority` prop to `ProductCard` that sets `loading="eager"` only on the first row of products (passed from `ProductGrid` as `priority={index < 4}`), leaving the rest lazy-loaded.

---

## Product fetch debugging

**Tool used:** Claude

**Date:** 21 September 2026

**Purpose:** Fix a runtime error in the single-product page (`Product` component) that used `useQuery` + a Noroff API fetch to display product details by ID.

**Outcome:** Found two bugs. First, `useParams` was imported from `"react"` instead of `"next/navigation"`, causing a `useParams is not a function` runtime error. Second, after fixing the import, the page loaded but the title wasn't rendering - the Noroff v2 API wraps single-item responses in a `{ data, meta }` object, so `productData.title` needed to be `productResponse.data.title`. Both fixes resolved the issue and the product title now displays correctly.

---

## Hero section image

**Tool used:** Claude

**Date:** 21 September 2026

**Purpose:** Asked Claude to add the home-hero.jpg image, since my linking didn't work correctly.

**Outcome:** Claude added the `home-hero.jpg` image to the hero section, wrapped it in a `relative` container with a fixed height. Now it workes.

---

## Header logo image aspect ratio

**Tool used:** Claude

**Date:** 22 September 2026

**Purpose:** Fix a console warning on the Shopflow logo `Image` in `layout.tsx` saying width or height was modified via CSS without the other, breaking the aspect ratio.

**Outcome:** Claude explained the warning was caused by Tailwind's preflight CSS setting `height: auto` on all `<img>` elements globally, while the `width={28}`/`height={28}` attributes on the `Image` stayed fixed, creating a mismatch. Claude added `style={{ width: "auto", height: "auto" }}` to the logo's `Image` so both dimensions resolve consistently via CSS, which removed the warning.

---

## Star rating component

**Tool used:** Claude

**Date:** 23 September 2026

**Purpose:** I got a warning that the stars were missing `key` props in the array mapping. I also couldn't get the stars to show the right color using fill prop like the source, so I asked Claude why it wasn't working and how to fix it.

**Outcome:** Claude explained to me I was missing `key` props for the stars in the array mapping. I had had a long day at work and totally forgot about it, but manage to fix the issue. It also swapped the hardcoded `fill` props for Tailwind `fill-*` classes passed in through `filledColor` and `emptyColor` props.

---

## Mobile navbar menu

**Tool used:** Claude

**Date:** 25 September 2026

**Purpose:** My mobile hamburger menu wasn't opening, but I could toggle between the hamburger and the X but nothing showed up.

**Outcome:** Claude found that `isOpen` state existed and the icon swapped correctly, but I had never actually built the dropdown menu panel itself, so there was nothing to show. I then asked for it to overlay on top of the page instead of pushing rest of content down, so Claude switched it to `absolute` positioning under the header.

I later stumble upon an issue where the dark backdrop was covering the navbar itself, so Claude helped me adjusting its positioning to be `absolute top-full` instead of `fixed inset-0`.
