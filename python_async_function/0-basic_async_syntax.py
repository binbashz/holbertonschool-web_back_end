#!/usr/bin/env python3
"""  asynchronous coroutine named wait_random
that waits for a random delay and returns the
delay using the asyncio and random modules """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    defines a coroutine called wait_random
    that waits for a random time between 0
    and max_delay seconds.
    """
    rand_number = random.uniform(0, max_delay)
    await asyncio.sleep(rand_number)
    return rand_number
