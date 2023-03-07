import asyncio
from typing import List
from kasa import Discover, SmartBulb


class MultiBulb():

    def __init__(self, bulb_names: List[str], transition: int):
        self.bulb_names = bulb_names
        self.ip_map = {}
        self.bulbs = []
        self.transition = transition

    async def setup(self):
        await self.create_ip_map()
        self.create_bulbs()

    async def create_ip_map(self):
        found_devices = await Discover.discover()
        for k, v in found_devices.items():
            if v.alias in self.bulb_names:
                self.ip_map[v.alias] = k

    def create_bulbs(self):
        self.bulbs = [SmartBulb(ip) for ip in self.ip_map.values()]

    async def turn_on(self):
        for bulb in self.bulbs:
            await bulb.turn_on(transition=self.transition)
            await bulb.update()

    async def turn_off(self):
        for bulb in self.bulbs:
            await bulb.turn_off(transition=self.transition)
            await bulb.update()

    async def set_brightness(self, brightness):
        for bulb in self.bulbs:
            await bulb.set_brightness(brightness, transition=self.transition)
            await bulb.update()

    async def set_color(self, h, s, v):
        for bulb in self.bulbs:
            await bulb.set_hsv(h, s, v, transition=self.transition)
            await bulb.update()


async def main():
    bulbor = MultiBulb(["J-Up", "J-Window", "J-Lounge", "J-Vent"])
    await bulbor.setup()
    await bulbor.turn_on()
    await bulbor.set_color(10, 20, 80)


if __name__ == "__main__":
    asyncio.run(main())
