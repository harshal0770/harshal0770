if (window.innerWidth <= 768) {
  console.clear();
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", () => {
    gsap
      .timeline({
      scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: false
      }
      })
      .to("img", {
      scale: 1.5,
      z: 200,
      transformOrigin: "center center",
      ease: "power1.inOut"
      })
      .to(
      ".section.hero",
      {
      scale: 1.05,
      transformOrigin: "center center",
      ease: "power1.inOut"
      },
      "<"
      );

    // Change blue section background color
    document.querySelector('.section.blue').style.backgroundImage = 'url(https://drive.google.com/drive/folders/1raVFDhcLdUNRW1PIDhLB4c98CivF38QJ)';
    document.querySelector('.section.blue').style.backgroundSize = 'cover';
    document.querySelector('.section.blue').style.backgroundPosition = 'center';

    // Add background image to purple section
    document.querySelector('.section.purple').style.backgroundImage = 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd-nature&psig=AOvVaw09_sPkeeiZoNXMJlMh1km9&ust=1736739951263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDa7NOi74oDFQAAAAAdAAAAABAE)';
    document.querySelector('.section.purple').style.backgroundSize = 'cover';
    document.querySelector('.section.purple').style.backgroundPosition = 'center';

    // Make text a little bit transparent
    document.querySelectorAll('.section.purple .text').forEach(text => {
      text.style.opacity = '0.9';
    });
  });

  // Animate purple section from right to left
  gsap.fromTo(
    ".section.purple",
    { x: "100%" },
    {
      x: "0%",
      scrollTrigger: {
        trigger: ".section.purple",
        start: "center center",
        end: "bottom center",
        scrub: true,
        markers: false
      }
    }
  );

  // Animate blue section from left to right
  gsap.fromTo(
    ".section.blue",
    { x: "-100%" },
    {
      x: "0%",
      scrollTrigger: {
        trigger: ".section.blue",
        start: "center center",
        end: "bottom center",
        scrub: true,
        markers: false
      }
    }
  );

  // Ensure the profile photo is visible and circular
  document.querySelectorAll('.profile-photo').forEach(photo => {
    photo.style.borderRadius = '50%';
    photo.style.overflow = 'hidden';
    photo.style.width = '100px'; // Adjust size as needed
    photo.style.height = '100px'; // Adjust size as needed
  });
} else {
  console.clear();
}

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );

  // Add background image to purple section
  document.querySelector('.section.purple').style.backgroundImage = 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd-nature&psig=AOvVaw09_sPkeeiZoNXMJlMh1km9&ust=1736739951263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDa7NOi74oDFQAAAAAdAAAAABAE)';
  document.querySelector('.section.purple').style.backgroundSize = 'cover';
  document.querySelector('.section.purple').style.backgroundPosition = 'center';

  // Make text a little bit transparent
  document.querySelectorAll('.section.purple .text').forEach(text => {
    text.style.opacity = '0.8';
  });
});
// Animate purple section from right to left
gsap.fromTo(
  ".section.purple",
  { x: "100%" },
  {
    x: "0%",
    scrollTrigger: {
      trigger: ".section.purple",
      start: "center center",
      end: "bottom center",
      scrub: true,
      markers: true
    }
  }
);

// Animate blue section from left to right
gsap.fromTo(
  ".section.blue",
  { x: "-100%" },
  {
    x: "0%",
    scrollTrigger: {
      trigger: ".section.blue",
      start: "center center",
      end: "bottom center",
      scrub: true,
      markers: true
    }
  }
);

// Ensure the profile photo is visible and circular
document.querySelectorAll('.profile-photo').forEach(photo => {
  photo.style.borderRadius = '50%';
  photo.style.width = '180px'; // Adjust size as needed
  photo.style.height = '180px'; // Adjust size as needed
  photo.style.overflow = 'hidden';
  photo.style.width = '90px'; // Adjust size as needed
  photo.style.height = '90px'; // Adjust size as needed
});
// Add background image to the whole purple section
document.querySelector('.section.purple').style.backgroundImage = 'url(https://wallpapers.com/images/featured-full/hd-nature-ngdfb9h966h4z3le.jpg)';
document.querySelector('.section.purple').style.backgroundSize = 'cover';
document.querySelector('.section.purple').style.backgroundPosition = 'center';