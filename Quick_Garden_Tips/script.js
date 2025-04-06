
    const dropbox2=document.getElementById("inOrOut")
    const dropbox1=document.getElementById("Plant-Name")
    const button =document.getElementById("button")
    const text = document.getElementById("plant-info")
    const image = document.getElementById("image")
    button.addEventListener("click", () =>{
        image.innerHTML=""
        value1=dropbox1.value
        value2=dropbox2.value
        if(value1=="potato"){
            if(value2=="indoor"){
                text.innerHTML="<p>Here's how to grow some spuds indoors: First, set up a suitable pot, preferably a foot deep. Put your soil in, then plant a potato peice with an eye attatched eye up in about 4 inches of soil. Cover and water to keep soil moist but not soggy. Continue to pile soil on the plant so that the tubers are beneath the ground. Harvest in about 12-16 weeks or when plant is yellow and dying</p>"
            }
            else{
                text.innerHTML="<p>Growing potatoes outdoors is easy! First, put your seed potato in the ground about half a foot to a foot deep. Cover the potato and keep watered. Harvest in 12-16 weeks or when the plant is yellow and dying.</p>"
            }
            img=document.createElement("img")
            img.src="./potatoes.jpg"
            img.classList.add("images")
            image.appendChild(img)
        }
        else if(value1=="carrot"){
            if(value2=="indoor"){
                text.innerHTML="<p>Growing carrots indoors is possible with the right setup and a bit of patience. Choose a container that’s at least 12 inches deep, as carrots need room for their roots to grow straight. Use a light, sandy potting mix that drains well, and sow seeds directly into the soil, spacing them according to the variety’s needs (usually about 1 to 2 inches apart). Place the container in a bright window or under grow lights for at least 8 hours of light per day. Keep the soil consistently moist, but not soggy, and thin the seedlings once they sprout to prevent crowding. Carrots grown indoors may be smaller depending on variety and light, but they typically take about 70 to 80 days to mature. When tops are about an inch wide and you can see the shoulders of the carrots poking through the soil, they’re ready to harvest.</p>"
            }
            else{
                text.innerHTML="<p>Growing carrots outdoors is relatively straightforward and best suited for cooler seasons. Carrots prefer loose, rock-free soil that allows their roots to grow without obstruction. Sow seeds directly into the garden bed or raised bed, spacing them about half an inch apart and covering lightly with soil. Keep the soil evenly moist and thin the seedlings after a few weeks to give each plant enough space to grow. Carrots need full sun and take anywhere from 60 to 80 days to reach maturity, depending on the variety. Make sure to water deeply, especially during dry spells, and mulch to retain soil moisture and prevent weeds. When the tops of the carrots are visible and the roots are thick, gently pull them up by hand or with a garden fork.</p>"
            }
            img=document.createElement("img")
            img.src="./carrots.jpg"
            img.classList.add("images")
            image.appendChild(img)
        }
        else if(value1=="strawberry"){
            if(value2=="indoor"){
                text.innerHTML="<p>Growing strawberries indoors is very doable and great for small spaces. Choose a compact or day-neutral variety like ‘Tristar’ or ‘Albion’ that produces fruit continuously under the right conditions. Use a wide, shallow container or hanging basket with good drainage, and fill it with a rich, lightweight potting mix. Strawberries need at least 6–8 hours of direct sunlight or strong grow lights to thrive indoors. Water when the top inch of soil feels dry, and consider hand-pollinating the flowers with a small brush to help fruit develop indoors. With regular feeding and the right light, you can enjoy small but sweet harvests for months.</p>"
            }
            else{
                text.innerHTML="<p>Growing strawberries outdoors is easy and rewarding, especially in raised beds, containers, or traditional garden rows. Plant them in early spring in a sunny area with rich, well-drained soil. Space them about 12–18 inches apart, depending on the variety. There are three main types: June-bearing (one large harvest), everbearing (two smaller harvests), and day-neutral (continuous smaller harvests). Keep plants well-watered, mulch to suppress weeds and keep fruit clean, and remove runners unless you want the plants to spread. Harvest berries when they’re fully red and fragrant. With a bit of care, outdoor strawberries can keep producing for several years.</p>"
            }
            img=document.createElement("img")
            img.src="./strawberries.jpg"
            img.classList.add("images")
            image.appendChild(img)
        }
        else if(value1=="raspberry"){
            if(value2=="indoor"){
                text.innerHTML="<p>Growing raspberries indoors is a bit more challenging but can be done with dwarf or container-friendly varieties like ‘Raspberry Shortcake’. Use a large container at least 16–20 inches deep with good drainage, and fill it with rich, slightly acidic potting soil. Place the plant in a spot that gets at least 6–8 hours of sunlight daily, or supplement with grow lights. Indoor raspberries need a support structure like a trellis or stakes to guide their tall, arching canes. Water regularly to keep the soil evenly moist, and prune back old canes after they fruit to make room for new growth. While indoor harvests might be smaller, with the right care you can still enjoy fresh berries from late spring through summer</p>"
            }
            else{
                text.innerHTML="<p>Growing raspberries outdoors is much easier and results in bigger yields. Plant them in early spring in a sunny spot with well-drained, slightly acidic soil. Raspberries grow best in raised rows or beds to improve drainage and air circulation. Space plants about 2–3 feet apart and install a trellis or wire system to support their long canes. Keep the soil moist and mulch around the base to prevent weeds and retain water. Summer-bearing raspberries produce one large crop per year, while everbearing types produce two smaller ones—one in summer and one in fall. Pruning is essential: remove old, woody canes after fruiting and thin out new ones in early spring to keep the patch healthy and productive.</p>"
            }
            img=document.createElement("img")
            img.src="./raspberries.jpg"
            img.classList.add("images")
            image.appendChild(img)
        }
    })
