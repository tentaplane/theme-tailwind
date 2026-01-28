@php
    $content = (string) ($props['content'] ?? null);
@endphp

<div class="p-8">
    <div class="prose max-w-none">
        {!! nl2br(e($content)) !!}
    </div>
</div>
