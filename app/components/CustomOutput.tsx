import {
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react';

export default function CustomOutput({
  data,
}: NodeProps) {
  const label = data.label as string;

  return (
    <div
      style={{
        width: '200px',
        boxSizing: 'border-box',
        background: '#ffffff',
        border: '1px solid #bbf7d0',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: '10px',
          height: '10px',
          background: '#16a34a',
          border: '2px solid #ffffff',
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: '10px 14px',
          background: '#f0fdf4',
          borderBottom: '1px solid #bbf7d0',
          borderRadius: '10px 10px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: '#16a34a',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          O
        </div>

        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#166534',
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: '10px',
              color: '#64748b',
            }}
          >
            Output
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: '12px 14px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: '#6b7280',
            marginBottom: '6px',
          }}
        >
          Result
        </div>

        <input
          type="text"
          placeholder="Output value..."
          onMouseDown={(event) => event.stopPropagation()}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px 10px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            outline: 'none',
            fontSize: '12px',
            background: '#ffffff',
          }}
        />
      </div>
    </div>
  );
}