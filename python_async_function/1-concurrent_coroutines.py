#!/usr/bin/env python3
""" Let's execute multiple coroutines at the same time with async"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ defines a wait_n coroutine that creates a
    list of wait times generated by the wait_random
    coroutine and returns them in ascending order."""
    wait_times = []
    for i in range(n):
        list_float.append(await(wait_random(max_delay)))
    return sorted(wait_times)