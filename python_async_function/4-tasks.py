#!/usr/bin/env python3
""" Take the code from wait_n and
alter it into a new function task_wait_n.
The code is nearly identical
to wait_n except task_wait_random
is being called. """
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """asynchronous function task_wait_n creates n asynchronous tasks
    using task_wait_random ,to generate random wait times.
    It then returns a list of the wait times,
    sorted in ascending order."""
    task: List[float] = []   # type annotation
    for x in range(0, n):
        task.append(await(task_wait_random(max_delay)))
    return sorted(task)
