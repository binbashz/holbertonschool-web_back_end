#!/usr/bin/env python3
"""Measure the runtime
"""
import asyncio
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time for wait_n and returns total_time / n
    """
    init_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    complete_time = end_time - init_time
    return complete_time / n
