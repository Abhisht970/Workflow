import {
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react';

export default function CustomCondition({
  data,
}: NodeProps) {
  const label = data.label as string;

  return (
    <div
      style={{
        width: '220px',
        boxSizing: 'border-box',
        background: '#ffffff',
        border: '1px solid #fed7aa',
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
          background: '#f97316',
          border: '2px solid #ffffff',
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: '10px 14px',
          background: '#fff7ed',
          borderBottom: '1px solid #fed7aa',
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
            background: '#f97316',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          ?
        </div>

        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#9a3412',
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: '10px',
              color: '#78716c',
            }}
          >
            Condition
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
          Check value
        </div>

        <input
          type="text"
          placeholder="Enter condition..."
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

      {/* Yes Label */}
      <div
        style={{
          position: 'absolute',
          right: '-30px',
          top: '42px',
          fontSize: '10px',
          color: '#16a34a',
          fontWeight: 600,
        }}
      >
        YES
      </div>

      {/* Yes Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="yes"
        style={{
          width: '10px',
          height: '10px',
          background: '#16a34a',
          border: '2px solid #ffffff',
        }}
      />

      {/* No Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '-22px',
          right: '28px',
          fontSize: '10px',
          color: '#dc2626',
          fontWeight: 600,
        }}
      >
        NO
      </div>

      {/* No Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="no"
        style={{
          width: '10px',
          height: '10px',
          background: '#dc2626',
          border: '2px solid #ffffff',
        }}
      />
    </div>
  );
}